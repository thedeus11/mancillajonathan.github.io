const routes = [
    {
        path: '/',
        template: `
        <div class="title-image">
        <div class="title">
            <p class="name">I'm <strong>Jonathan</strong></p>
            <p class="description">A self-taught learner in web development and UI design based in Tijuana, México.</p>
            <button class="hire-me">Hire me!</button>
        </div>
        <div class="image">
            <img class="landing-img" src="src/img/landing-img.svg" alt="">
        </div>
        </div>
        <div class="skills">
            <div class="frontend">
                <h3>Front-end Developer</h3>
                <p>HTML, CSS and JavaScript projects made responsively for mobile.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
            <div class="uidesign">
                <h3>UX/UI Designer</h3>
                <p>Adobe XD for components, layouts and UI design systems.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
            <div class="reactdev">
                <h3>React Developer</h3>
                <p>React.js, the most popular library for front-end projects.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
        </div>
        <p class="credit-legend">Made with ❤️ by <a class="link-github" href="https://github.com/mancillajonathan" target="_blank"><em>@mancillajonathan</em></a></p>
        `
    },
    {
        path: '/aboutme',
        template: `
        <div class="aboutme">
            <div class="div-aboutme">
                <div class="whoami">
                    <p class="title-aboutme">Who Am I?</p>
                    <p class="content-aboutme">I'm Jonathan Mancilla a 22 years old currently studying an IT mayor, I'm interested in front-end technologies, also I'm a BQQ and friends lover becase nothing good can happen without your friends.</p>
                </div>
                <div class="location">
                    <p class="title-aboutme">My Location</p>
                    <p class="content-aboutme">I'm Jonathan Mancilla a 22 years old currently studying an IT mayor, I'm interested in front-end technologies, also I'm a BQQ and friends lover becase nothing good can happen without your friends.</p>
                </div>
                <div class="socialmedia">
                    <p class="title-aboutme">Social Media</p>
                    <p class="content-aboutme">I'm Jonathan Mancilla a 22 years old currently studying an IT mayor, I'm interested in front-end technologies, also I'm a BQQ and friends lover becase nothing good can happen without your friends.</p>
                </div>
            </div>
            <div class="img-aboutme">
                <img class="aboutme-pic" src="src/img/aboutme-img.svg">
            </div>
        </div>       
        <p class="credit-legend">Made with ❤️ by <a class="link-github" href="https://github.com/mancillajonathan" target="_blank"><em>@mancillajonathan</em></a></p> 
        `
    },
    {
        path: '/resume',
        template: `
        <div class="resume">
            <p class="name title-resume">You can download my CV</strong></p>
            <img src="src/img/resume-img.svg" alt="image resume">
            <button class="hire-me"><a href="src/resume.pdf" download>Download</a></button>
        </div>
        <p class="credit-legend">Made with ❤️ by <a class="link-github" href="https://github.com/mancillajonathan" target="_blank"><em>@mancillajonathan</em></a></p>
        `
    },
];