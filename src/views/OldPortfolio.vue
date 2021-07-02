<template>
  <div class="container">
        <div>
            <h1 class="small-space"><span class="emoji">💬</span> Hey! I'm <b>Ben Harvey</b></h1>
            <h4>I'm a Software Developer</h4>
        </div>

        <div class="break"></div>

        <div>
            <h2 class="small-space">📘 Don't feel like any more reading?</h2>
            <h4>I'll get to the point - here's my
                <a href="./Resume.pdf" target="_blank">Resume</a>,
                <a href="mailto:ben.harvey1213@gmail.com">Email</a>,
                <a href="https://www.linkedin.com/in/benjamin-harvey-65762b196/" target="_blank">LinkedIn</a>, and
                <a href="https://github.com/benharvey1213" target="_blank">GitHub</a>
            </h4>
        </div>

        <div class="break"></div>
        <div>
            <h2 class="small-space">🔖
                <a id="demo-skip" href="#demo">Demo</a>, <a id="skills-skip" href="#skills">Skills</a>, <a id="projects-skip" href="#projects">Projects</a>, <a id="education-skip" href="#education">Education</a>, <a id="work-skip" href="#work">Work</a>,
                <a id="other-skip" href="#other">Other</a>
            </h2>
        </div>

        <div class="break"></div>

        <div>
            <h2 id="demo-skip-section" class="small-space">💻 I love building clean, <b>beautiful</b> apps</h2>
            <h4>Here's a quick messaging demo I made - try it out!</h4>

            <div id="messaging" class="soft-shadow">
                <div id="messages">
                    <div class="messages-left">
                        <div class="msg msg-left">Hey! Thanks for visiting my site!</div>
                    </div>
                </div>
            </div>

            <div id="messagingInput" class="row">
                <input id="messageInput" class="soft-shadow" spellcheck="false" autocomplete="off" type="text" placeholder="Write your message here...">
                <button id="sendInput" class="soft-shadow">Send</button>
            </div>
        </div>

        <div class="break"></div>

        <div>
            <h2 id="skills-skip-section" class="small-space">⌨️ I've got a few <b>skills</b></h2>
            <h4>And I'm always eager to pick up more</h4>
        </div>

        <div>
            <div id="skills-table" class="row">
                <div class="column card-column">
                    <div class="card column-card soft-shadow">
                        <h6 class="smedium-space skill-heading"><b>Languages</b></h6>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </div>

                </div>
                <div class="column card-column">
                    <div class="card column-card soft-shadow">
                        <h6 class="smedium-space skill-heading"><b>Frameworks/Toolkits</b></h6>
                        <li>Angular</li>
                        <li>Flutter</li>
                        <li>Electron</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                    </div>

                </div>
                <div class="column card-column">
                    <div class="card column-card soft-shadow">
                        <h6 class="smedium-space skill-heading"><b>Other</b></h6>
                        <li>Git</li>
                        <li>Trello</li>
                        <li>Microsoft Office</li>
                        <li>Music Production</li>
                        <li>Video Production</li>
                    </div>

                </div>
            </div>
        </div>

        <div class="break"></div>

        <div>
            <h2 id="projects-skip-section" class="small-space">🖱️ I work on a lot of <b>personal projects</b></h2>
            <h4>I always have an idea that motivates me to learn new things</h4>
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I made my foray into <b>Node.js</b> and the <b>Socket.IO</b> library by developing an <a href="https://github.com/benharvey1213/cards" target="_blank"><i>Apples to Apples</i> clone</a></h4>
                <hr>
                <p>I love multiplayer party games akin to the <i>Jackbox Party Packs</i>, so I wanted to make one of my own. The twist to this project was that each of the cards was generated semi-randomly, in order to make sure each game was a completely
                    new experience.</p>
            </div>
            <div class="column card-column">
                <img class="soft-shadow rounded" src="../assets/cardstv.png" alt="">
            </div>
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I expanded upon my knowledge of <b>Node.js</b> and <b>Socket.IO</b> from the last project, and programmed <a href="https://github.com/benharvey1213/comment-bomb" target="_blank">Comment Bomb</a>.</h4>
                <hr>
                <p>This game uses Reddit's API to pull a trending picture from a curated list of subreddits. Each user is prompted to create a funny caption for the picture, then everyone votes for the best caption.</p>
            </div>
            <div class="column card-column">
                <img class="rounded soft-shadow" src="../assets/commentbomb.png" alt="">
            </div>
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I taught myself <b>Electron</b> by building <a href="https://github.com/benharvey1213/music-video-app" target="_blank">this music video creation app</a> in order to quickly generate shareable content for social media</h4>
                <hr>
                <p>After developing a <b>Python</b> backend with the <i>MoviePy</i> library, I was able to utilize the power of <b>JavaScript</b> to build a user-friendly frontend. The user is able to choose an audio file, a video file, and an overlay image
                    to customize their video.</p>
            </div>
            <div class="column card-column">
                <img class="col-img rounded soft-shadow" src="../assets/MusicVideoApp.png" alt="">
            </div>
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I jumped into <b>Vue.js</b> by building <a href="https://gracious-hoover-391ee6.netlify.app/" target="_blank">this Spotify UI clone</a></h4>
                <hr>
                <p>I used the desktop Spotify app as a reference and tried to replicate the look using <b>Vue</b>.</p>
            </div>
            <div class="column card-column">
                <img class="col-img rounded soft-shadow" src="../assets/spotify.png" alt="">
            </div>
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I taught myself more about <b>Python</b> and <b>Linux</b> by building <a href="https://github.com/benharvey1213/holidaytwitterbot" target="_blank">this Twitter bot</a></h4>
                <hr>
                <p>The bot runs on a <b>Raspberry Pi</b>, and pulls its data from a large CSV file I generated by scraping the web with <b>Python</b>.</p>
            </div>
            <!-- <div class="column card-column">
                <p class="soft-shadow" id="twitter-feed"><a class="twitter-timeline" data-height="350" href="https://twitter.com/notaholidaybot?ref_src=twsrc%5Etfw">Tweets by notaholidaybot</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </p>
            </div> -->
        </div>

        <div class="row soft-shadow card">
            <div class="column card-column">
                <h4>I also made this <a href="https://github.com/benharvey1213/portfolio" target="_blank">portfolio website</a> you're on now! I built it with the web standards - <b>HTML</b>, <b>JavaScript</b>, and <b>CSS</b></h4>
                <hr>
                <p>I used the <b>Milligram</b> CSS framework to make things look a bit prettier</p>
            </div>
        </div>


        <div class="break"></div>

        <div>
            <h2 id="education-skip-section" class="small-space">🎓 I have some <b>education</b> under my belt</h2>
            <h4>Guess I can't create the next Facebook since I didn't drop out...</h4>
        </div>


        <div class="card soft-shadow">
            <h5 class="small-space">🤘 <b>North Dakota State University</b> (2018 - Now)</h5>
            <hr>
            <p>I'm attending for my Bachelor's Degree in Computer Science, and will be graduating in the Spring of 2021. My cumulative GPA is 3.729</p>
            <h6 class="smedium-space"><b><u>Relevant Coursework:</u></b></h6>
            <li><b>Intro to Computer Science</b> - learned the basics of Java</li>
            <li><b>Data Structures and Algorithms</b> - expanded upon Intro to Computer Science</li>
            <li><b>Modern Software Development</b> - learned development with ASP.NET</li>
            <li><b>Database Systems</b> - learned the basics of relational databases</li>
            <li><b>Advanced Software Development</b> - learned Angular, Bootstrap, and Django</li>
        </div>

        <div class="card soft-shadow">
            <h5 class="small-space">🏫 <b>Hazen High School</b> (2014 - 2018)</h5>
            <hr>
            <p class="p-desc">I was involved in activities like Science Olympiad, National Honor Society, Robotics, and Band. I had experimented with programming since 5th grade, but I never really got the opportunity to apply it in High School.</p>
        </div>

        <div class="break"></div>

        <div>
            <h2 id="work-skip-section" class="small-space">👔 I'm not new to <b>work</b></h2>
            <h4>"So, if you could do that, that would be great..." - <i>Bill Lumbergh</i></h4>
        </div>


        <div class="card soft-shadow">
            <h5 class="small-space">💾 <b>Information Technology Assistant</b></h5>
            <h6 class="small-space">NDSU Dining - Fargo, ND <i>(Fall 2019 - Spring 2020)</i></h6>
            <hr>
            <p class="p-desc">Throughout my time at Dining so far, I've been able to work on applications for internal use, mainly with <b>C#</b>. I had my first encounter with <b>SQL</b> here, and quickly become comfortable with it. I've also gotten to delve into some
                Android and iOS app development in <b>Java</b> and <b>Swift</b>.</p>
        </div>

        <div class="card soft-shadow">
            <h5 class="small-space">📁 <b>Seasonal Office Clerk Assistant</b></h5>
            <h6 class="small-space">West River Telecommunications - Hazen, ND <i>(Summer 2019 and 2020)</i></h6>
            <hr>
            <p class="p-desc">Here, I worked with the Engineering department to help them catch up on some projects. I was assigned some repetitive tasks, so I took to opportunity to write some <b>AutoHotKey</b> scripts to better utilize my skills and make the tasks easier
                for me and my coworkers.</p>
        </div>

        <div class="card soft-shadow">
            <h5 class="small-space">🎥 <b>Student Manager, Concessions/Cleaning</b></h5>
            <h6 class="small-space">Cinema Flix - Hazen, ND <i>(2016-2017, 2017-2018)</i></h6>
            <hr>
            <p class="p-desc">This was my first job, where I got to work on my work ethic, customer interaction skills, and money handling. I was given the responsibility of Student Manager for the last year I worked here.</p>
        </div>


        <div class="break"></div>

        <div>
            <h2 id="other-skip-section" class="small-space">🏅 I've got some other <b>achievements</b>, too</h2>
            <h4>Not to toot my own horn or anything...</h4>
        </div>


        <div class="card soft-shadow">
            <h5 class="small-space">🦅 <b>Eagle Scout Rank</b> (2017)</h5>
            <hr>
            <p class="p-desc">After being in Cub Scouts and Boy Scouts for 9 years, I earned the highest rank offered in Scouting, showing commitment and dedication to my community</p>
        </div>

        <div class="break"></div>
        <div>
            <h2 class="small-space">🧐 Like what you see?</h2>
            <a href="mailto:ben.harvey1213@gmail.com">
                <h3 id="email">Email me!</h3>
            </a>
        </div>
    </div>
</template>

<script>
// import '../assets/script.js';

export default {
    name: 'Portfolio',
}
</script>

<style scoped>
    @import '../assets/milligram.css';

    body {
    padding: 30px;
    background-color: rgb(240, 240, 240);
}

::-webkit-scrollbar {
    width: 10px;
    /* background-color: rgb(245, 245, 245); */
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(241, 241, 241);
}

.break {
    height: 100px;
}

.rounded {
    border-radius: 5px;
}

.container {
    max-width: 800px;
}

.small-space {
    margin-bottom: 5px;
}

.smedium-space {
    margin-bottom: 10px;
}

.medium-space {
    margin-bottom: 18px;
}

.soft-shadow {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
}

.emoji {
    font-size: 3.6rem;
}

a {
    color: rgb(96, 203, 219);
    transition: color 0.2s;
}

a:hover {
    color: rgb(77, 163, 177);
}

pre>code {
    border-radius: 5px;
}

pre {
    background: none;
    border-left: none;
    margin-bottom: 0;
    height: fit-content;
}

code {
    background-color: rgb(65, 65, 65);
    border-radius: 20px;
    padding: 5px;
    color: white;
    margin: 5px;
}

.code-orange {
    color: rgb(250, 151, 37);
}

.code-blue {
    color: rgb(152, 215, 236);
}

.code-purple {
    color: rgb(202, 46, 202);
}

.code-yellow {
    color: rgb(255, 239, 21);
}

#skills-table {
    margin-bottom: 30px;
}


/* Messaging */

#messaging {
    width: 100%;
    /* background-color: rgb(255, 255, 255); */
    border-radius: 10px;
    /* border: 1px solid rgb(241, 241, 241); */
    margin-bottom: 10px;
}

#messages {
    height: 300px;
    overflow-y: scroll;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    scroll-behavior: smooth;
    /* margin-bottom: 10px; */
}

#messageInput {
    /* background-color: white; */
    margin-bottom: 0;
    border: none;
    /* background-color: rgb(250, 250, 250); */
    vertical-align: middle;
    margin-right: 8px;
    border-bottom: 1px solid rgb(235, 235, 235);
    border-radius: 0;
    transition: 0.2s;
}

#messageInput:focus {
    border-bottom: 1px solid rgb(96, 203, 219);
}

#sendInput {
    vertical-align: middle;
    background-color: rgb(96, 203, 219);
    border: none;
    text-transform: none;
    font-size: 0.9em;
    font-weight: normal;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.068);
}

.msg {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 20px;
    margin-top: 5px;
    -webkit-animation: fadein 0.8s;
    -moz-animation: fadein 0.8s;
    -ms-animation: fadein 0.8s;
    -o-animation: fadein 0.8s;
    animation: fadein 0.8s;
    /* box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.096); */
}

.msg-left {
    border-top-left-radius: 10px;
    background-color: rgb(96, 203, 219);
    color: white;
}

.msg-right {
    border-top-right-radius: 10px;
    background-color: rgb(241, 241, 241);
    color: rgb(39, 39, 39);
}

.messages-left {
    width: auto;
}

.messages-right {
    width: auto;
    text-align: right;
}

#messagingInput {
    margin-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
}

.text-link {
    color: rgb(245, 245, 245);
}

.text-link:hover {
    color: white
}

#email {
    margin-top: 20px;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.skill-heading {
    /* background-color: rgb(250, 250, 250); */
    background-color: rgb(96, 203, 219);
    padding: 8px;
    padding-left: 12px;
    border-radius: 5px;
    /* color: rgb(109, 109, 109); */
    color: white;
}

#twitter-feed {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
}

.card {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: white;
}

hr {
    /* background-color: rgb(0, 0, 0)!important; */
    margin-top: 10px;
    margin-bottom: 10px;
}

.p-desc {
    margin-bottom: 4px;
}

.column-card {
    height: 100%;
}

.col-img {
    margin-top: auto;
    margin-bottom: auto;
}
</style>