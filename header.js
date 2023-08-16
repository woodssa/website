document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    const navItems = [
        { label: "Home", target: "home" },
        { label: "About", target: "about" },
        { label: "Services", target: "services" },
        { label: "Contact", target: "contact" }
    ];

    const navSource = `
        <ul>
            {{#each navItems}}
                <li><a href="#{{target}}">{{label}}</a></li>
            {{/each}}
        </ul>
    `;

    const navTemplate = Handlebars.compile(navSource);
    navbar.innerHTML = navTemplate({ navItems });
});
