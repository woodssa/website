document.addEventListener("DOMContentLoaded", function () {
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
    navbar.innerHTML = navTemplate({ pages });
});
