<template>
  <div class="app" v-on:click="focus($event)">
    <div class="console">
      <div class="header">
        <div class="left">
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div>
          <div class="circle" id="circle3"></div>
        </div>
        <div class="right">
          <p><i>benharvey.dev :)</i></p>
        </div>
      </div>

      <div class="console-container">
        <div class="body" ref="body">
          <p v-for="line in lines" :key="line">{{ line }}</p>

          <p v-for="line in linkLines" :key="line">
            <a :href="line.url" target="_blank">{{ line.title }}</a>
          </p>

          <div class="input-section">
            <p><b>></b></p>
            <input
              ref="input"
              type="text"
              spellcheck="false"
              autofocus
              @keyup.enter="onEnter"
              @keydown.tab.prevent="onTab"
            />
          </div>
        </div>
        <div class="image hidden" ref="imageContainer">
          <img ref="image" :src="currentImage" />
        </div>
      </div>
    </div>
    <div class="mobile hidden">
      <h1>Hey!</h1>
      <p>Thanks for visiting on mobile, but this site is way cooler on desktop.</p>
      <img src="images/desktop.PNG"/>
      <p>Meanwhile, check out my <a target="_blank" href="Resume.pdf">resume</a>!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lines: [
        "Welcome to my website!",
        'There\'s a few things you can do here - start with the "help" command',
      ],
      linkLines: [],
      commands: [
        "skills",
        "projects",
        "education",
        "work",
        "other",
        "links",
        "email",
        "resume",
      ],
      otherCommands: [
        "help",
        "back",
        "commands",
        "cd ../",
        "clear",
        "github",
        "linkedin",
        "ben.harvey1213@pm.me",
        "three"
      ],
      languages: ["C#, Java, Python", "HTML, CSS, JS", "SQL"],
      frameworks: ["Vue", "Angular", "Xamarin, Flutter"],
      other: ["Git", "Adobe, Office", "Trello"],
      education: [
        [
          "North Dakota State University - Fargo, ND",
          "Magna Cum Laude",
          "CGPA - 3.623",
        ],
        [
          "Hazen High School - Hazen, ND",
          "Student of the Year 2018",
          "ACT - 30",
        ],
      ],
      work: [
        {
          place: "NDSU Dining IT",
          lines: [
            "IT Assistant - Fargo, ND",
            "August 2019 - May 2021",
            "C#, SQL, Xamarin, Java, Swift"
          ],
          description:
            "Helped with key technology implementations such as application development for both internal and external use, technology improvement projects, and technical support.",
        },
        {
          place: "West River Telecommunications",
          lines: [
            "Office Clerk Assistant - Hazen, ND",
            "August 2019 - May 2021",
            "MapWise, AutoHotKey"
          ],
          description:
            "Utilized mapping software to update multiple aspects of company engineering records and performed general clerical duties. Improved department efficiency by writing a program to automate a repetitive task.",
        },
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/benharvey1213",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/benjamin-harvey-65762b196/",
        },
      ],
      projects: [
        "cards",
        "comments",
        "videos",
        "spotify",
        "twitter"
      ],
      currentImage: ""
    };
  },
  mounted() {
    focus();
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    onTab() {
      var lower = this.$refs.input.value.toLowerCase();
      var found = false;

      if (lower == "") {
        return;
      }

      this.commands.forEach((command) => {
        if (command.startsWith(lower)) {
          this.$refs.input.value = command;
          found = true;
          return;
        }
      });

      if (!found) {
        this.projects.forEach((command) => {
          if (command.startsWith(lower)) {
            this.$refs.input.value = command;
            found = true;
            return;
          }
        });
      }

       if (!found) {
        this.otherCommands.forEach((command) => {
          if (command.startsWith(lower)) {
            this.$refs.input.value = command;
            found = true;
            return;
          }
        });
      }
    },
    clear() {
      this.$refs.imageContainer.classList.add("hidden");
      this.lines = [];
      this.linkLines = [];
    },
    onEnter() {
      var lower = this.$refs.input.value.toLowerCase().trim();
      this.$refs.input.value = "";

      switch (lower) {
        case "help":
        case "commands":
        case "?":
        case "back":
        case "cd ..":
        case "cd ../":
        case "":
        case "ls":
          this.clear();

          this.lines.push("====== Commands ======");

          this.commands.forEach((command) => {
            this.lines.push("• " + command);
          });

          break;
        case "clear":
          this.clear();
          break;
        case "resume":
          window.open("Resume.pdf");
          break;
        case "skills":
          this.clear();

          this.lines.push("====== Languages =======");
          this.languages.forEach((language) => {
            this.lines.push("• " + language);
          });

          this.lines.push("\t");

          this.lines.push("====== Frameworks ======");
          this.frameworks.forEach((framework) => {
            this.lines.push("• " + framework);
          });

          this.lines.push("\t");

          this.lines.push("======== Other =========");
          this.other.forEach((o) => {
            this.lines.push("• " + o);
          });

          this.lines.push("\t");

          break;
        case "projects":
          this.clear();

          this.lines.push("====== Projects ======");

          this.projects.forEach(project => {
            this.lines.push("• " + project);
          });

          break;
        case "education":
          this.clear();

          this.lines.push("====== Education ======");

          this.lines.push("B.S., Computer Science (May 2021)");

          this.education[0].forEach((e) => {
            this.lines.push("• " + e);
          });

          this.lines.push("\t");

          this.lines.push("High School Degree (May 2018)");

          this.education[1].forEach((e) => {
            this.lines.push("• " + e);
          });

          this.lines.push("\t");

          break;
        case "work":
          this.clear();

          this.work.forEach((job) => {
            this.lines.push("==== " + job["place"] + " ====");

            job["lines"].forEach(line => {
              this.lines.push(line);
            });

            this.lines.push("\t");
          });

          break;
        case "links":
          this.clear();

          this.lines.push("====== Links ======");

          this.links.forEach((link) => {
            this.linkLines.push(link);
          });

          break;
        case "email":
          this.clear();

          this.lines.push("====== Email ======");

          this.linkLines.push({"title" : "ben.harvey1213@pm.me", "url" : "mailto:ben.harvey1213@pm.me"});

          break;
        case "other":
          this.clear()
          
          this.lines.push("====== Other ======");

          this.lines.push("Eagle Scout Award (2017)");

          break;
        case "github":
          window.open("https://github.com/benharvey1213");
          break;
        case "linkedin":
          window.open("https://www.linkedin.com/in/benjamin-harvey-65762b196/");
          break;
        case "ben.harvey1213@pm.me":
          window.open("mailto:ben.harvey1213@pm.me");
          break;
        case "cards":
          this.clear();

          this.currentImage = "images/cardstv.png";
          this.$refs.imageContainer.classList.remove("hidden");

          this.lines.push("====== Cards Clone ======");
          this.lines.push("I made my foray into Node.js and the Socket.IO library by developing an Apples to Apples clone.");
          this.lines.push("I love multiplayer party games akin to the Jackbox Party Packs, so I wanted to make one of my own. The twist to this project was that each of the cards was generated semi-randomly, in order to make sure each game was a completely new experience.");

          this.linkLines.push({"title" : "View on GitHub", "url" : "https://github.com/benharvey1213/cards"});

          break;
        case "comments":
          this.clear();

          this.currentImage = "images/commentbomb.png";
          this.$refs.imageContainer.classList.remove("hidden");

          this.lines.push("====== CommentBomb ======");
          this.lines.push("I expanded upon my knowledge of Node.js and Socket.IO from Cards, and programmed Comment Bomb.");
          this.lines.push("This game uses Reddit's API to pull a trending picture from a curated list of subreddits. Each user is prompted to create a funny caption for the picture, then everyone votes for the best caption.");

          this.linkLines.push({"title" : "View on GitHub", "url" : "https://github.com/benharvey1213/comment-bomb"});

          break;
        case "videos":
          this.clear();

          this.currentImage = "images/MusicVideoApp.png";
          this.$refs.imageContainer.classList.remove("hidden");

          this.lines.push("====== Music Video ======");
          this.lines.push("I taught myself Electron by building this music video creation app in order to quickly generate shareable content for social media.");
          this.lines.push("After developing a Python backend with the MoviePy library, I was able to utilize the power of JavaScript to build a user-friendly frontend. The user is able to choose an audio file, a video file, and an overlay image to customize their video.");

          this.linkLines.push({"title" : "View on GitHub", "url" : "https://github.com/benharvey1213/music-video-app"});

          break;
        case "spotify":
          this.clear();

          this.currentImage = "images/spotify.png";
          this.$refs.imageContainer.classList.remove("hidden");

          this.lines.push("====== Music Video ======");
          this.lines.push("I jumped into Vue.js by building this Spotify UI clone.");
          this.lines.push("I used the desktop Spotify app as a reference and tried to replicate the look using Vue.");

          this.linkLines.push({"title" : "View on GitHub", "url" : "https://github.com/benharvey1213/spotify-ui"});

          break;
        case "twitter":
          this.clear();

          this.lines.push("====== Twitter Bot ======");
          this.lines.push("I taught myself more about Python and Linux by building this Twitter bot for 2020.");
          this.lines.push("The bot ran on a Raspberry Pi, and pulled its data from a large CSV file I generated by scraping the web with Python.");

          this.linkLines.push({"title" : "View on Twitter", "url" : "https://twitter.com/notaholidaybotpro"});
          this.linkLines.push({"title" : "View on GitHub", "url" : "https://github.com/benharvey1213/holidaytwitterbot"});

          break;
        case "three":
          this.$router.push('three');
          break;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap");

* {
  font-family: "Courier Prime", monospace;
}

.hidden {
  display: none;
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

.app {
  /* https://cssgradient.io/ */
  background: rgb(163, 42, 42);
  background: linear-gradient(
    0deg,
    rgba(163, 42, 42, 1) 0%,
    rgba(247, 81, 81, 1) 50%,
    rgba(249, 177, 76, 1) 100%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.console-container {
  display: flex;
  justify-content: space-between;
}

.image img {
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.212);
}

.console {
  width: 800px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.753);
  border-radius: 20px;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.212);
  margin-left: 20px;
  margin-right: 20px;
}

.console a {
  color: white;
}

.body {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  text-align: left;
}

.header {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: space-between;
}

.header .left {
  display: flex;
}

.circle {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.164);
}

#circle1 {
  background-color: #a32a2a;
}

#circle2 {
  background-color: #f9b14c;
}

#circle3 {
  background-color: #62aa32;
}

.console p {
  display: inline-block;
  margin-right: auto;
  margin-bottom: 10px;
}

.input-section {
  display: flex;
  align-content: center;
  margin-bottom: 10px;
}

.input-section p {
  margin: 0px;
  margin-right: 8px;
}

.body input {
  background-color: transparent;
  border: none;
  color: white;
  font-size: inherit;
  outline: none;
  flex-grow: 1;
}

.mobile {
  color: white;
  padding: 30px;
}

.mobile h1 {
  font-size: 5rem;
  margin-bottom: 30px;
}

.mobile p {
  margin-bottom: 30px;
  font-size: 1.5rem;
}

.mobile a {
  color: white;
} 

.mobile img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 30px;
}

@media screen and (max-width: 480px) {
  .console {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
