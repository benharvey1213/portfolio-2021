<template>
  <div>
      <canvas id="bg"></canvas>

        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio. Dolorum iure, at tempore illum modi tenetur harum, autem, quae itaque cum sed iste provident placeat eius eligendi optio doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio. Dolorum iure, at tempore illum modi tenetur harum, autem, quae itaque cum sed iste provident placeat eius eligendi optio doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio. Dolorum iure, at tempore illum modi tenetur harum, autem, quae itaque cum sed iste provident placeat eius eligendi optio doloribus.</p>
        </main>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            bubbles: [],
            box: null,
            tape: null,
            lifeTimeConstant: 0.003,
        }
    },
    mounted: function() {
        // set up scene and camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 1000);

        // set up renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // background color
        this.renderer.setClearColor(0x98d1bb, 1);

        // camera distance away
        this.camera.position.setZ(40);

        // vhs tape box
        this.box = new THREE.Mesh(
            new THREE.BoxGeometry(3, 24, 15), [
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/back.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/cover.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/top.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/top.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/sideright.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/sideleft.png')) }),
            ],

        );

        this.scene.add(this.box);

        // vhs tape
        const tapeSideNormal = new THREE.TextureLoader().load(require('../assets/three/tapesidenormal.png'));

        this.tape = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 23.2, 14.5), [
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapefront.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapefront.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapetop.png')) }),
                new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapetop.png')) }),
                new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapeside.png')), normalMap: tapeSideNormal }),
                new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(require('../assets/three/tapeside.png')), normalMap: tapeSideNormal }),
            ]
        );

        this.scene.add(this.tape);

        // lighting
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(20, 20, 20);
        this.scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(ambientLight);

        // populate bubble array
        var i = 0;
        while (i++ < 600) {
            this.bubbles.push(this.addBubble());
        }

        // start with tape out a bit to avoid conflict with the box mesh
        this.tape.position.z = 1;

        // bind scroll to move function
        document.body.onscroll = this.moveCamera;

        this.camera.rotation.z = this.degreesToRadians(90);

        this.animate();
    },
    methods: {
        addBubble: function() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
            const bubble = new THREE.Mesh(geometry, material);

            this.initBubblePosition(bubble);

            // add to scene
            this.scene.add(bubble);

            // random value for fading use
            let lifetime = Math.random();

            return { mesh: bubble, direction: 1, lifetime: lifetime };
        },
        initBubblePosition: function(bubble) {
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            bubble.position.set(x, y, z);
        },
        moveCamera: function() {
            // get scroll amount
            const t = document.body.getBoundingClientRect().top;

            if (t >= -1000){
                const percent = (t / -1000) * 100;

                console.log(percent);

                // rotate camera as percent of scroll amount
                let desiredRadians = (this.degreesToRadians(-1) * percent) + this.degreesToRadians(90);

                // hard cap rotation
                if (desiredRadians < this.degreesToRadians(0)){
                    desiredRadians = 0;
                }

                this.camera.rotation.z = desiredRadians;
            }
            else {
                const tZero = t + 1000;

                // adjust camera
                this.camera.position.x = this.box.position.x + (tZero * -0.01) * Math.cos((tZero * -0.001));
                this.camera.position.y = this.box.position.y + (tZero * -0.0025) * Math.cos((tZero * -0.001));
                this.camera.position.z = 40 + (this.box.position.z + (tZero * 0.01));

                this.camera.lookAt(this.box.position);

                // adjust tape position
                this.tape.position.z = 1 + (tZero * -0.0022);
            }


            
        },
        animate: function() {
            requestAnimationFrame(this.animate);

            // bubble logic
            this.bubbles.forEach(bubble => {
                // constant floating effect
                bubble.mesh.position.y += 0.06;

                // bubble.material.opacity -= (factor / 500);
                if (bubble.direction > 0) {
                    bubble.mesh.material.opacity += this.lifeTimeConstant * bubble.lifetime;
                } else {
                    bubble.mesh.material.opacity -= this.lifeTimeConstant * bubble.lifetime;
                }

                // maxed, switch fade direction
                if (bubble.mesh.material.opacity >= 0.3) {
                    bubble.direction = -1;
                }

                // respawn bubble
                if (bubble.mesh.material.opacity <= 0) {
                    this.initBubblePosition(bubble.mesh);
                    bubble.direction = 1;
                }
            });

            this.renderer.render(this.scene, this.camera);
        },
        degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        }
    }
}
</script>

<style scoped>
canvas {
    position: fixed;
    top: 0;
    left: 0;
}

main {
    position: absolute;
    padding-bottom: 7500px;
}

p {
    color: transparent;
}

* {
    scroll-behavior: smooth;
}
</style>