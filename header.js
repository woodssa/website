document.addEventListener("DOMContentLoaded", function () {
    // Title
    const dynamicKeywords = [
        "Engineer",
        "Innovator",
        "Problem Solver"
    ];

    let keywordIndex = 0;

    function updateTitle() {
        const dynamicTitleElement = document.getElementById("dynamicTitle");
        const dynamicSubtitleElement = document.getElementById("dynamicSubtitle");
    
        dynamicTitleElement.textContent = 'Sarah Woods';
        dynamicSubtitleElement.textContent = dynamicKeywords[keywordIndex];
    
        keywordIndex = (keywordIndex + 1) % dynamicKeywords.length;
    }
    
    // Title updated every 3 seconds
    setInterval(updateTitle, 3000);  

    // Navigation Bar
    const navbar = document.getElementById("navbar");

    const pages = [
        { label: "Home", target: "home" },
        { label: "About Me", target: "about" },
        { label: "Portfolio", target: "portfolio" },
        { label: "Résumé", target: "resume" },
        { label: "Contact", target: "contact" }
    ];

    const navSource = `
        {{#each pages}}
            <a href="#{{target}}">{{label}}</a> 
        {{/each}}
    `;

    const navTemplate = Handlebars.compile(navSource);
    navbar.innerHTML += navTemplate({ pages });
});
