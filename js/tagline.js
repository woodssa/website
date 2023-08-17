document.addEventListener("DOMContentLoaded", function() {
    const tagline = document.getElementById("animatedTagline");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const taglineText1 = "MORE THAN";
    const taglineText2 = "AN ENGINEER";
    let index1 = 0;
    let index2 = 0;

    function typeLine1() {
        if (index1 < taglineText1.length) {
            line1.innerHTML += taglineText1.charAt(index1);
            index1++;
            setTimeout(typeLine1, 75);
        }
    }

    function typeLine2() {
        if (index2 < taglineText2.length) {
            line2.innerHTML += taglineText2.charAt(index2);
            index2++;
            setTimeout(typeLine2, 75);
        }
    }

    typeLine1();
    setTimeout(typeLine2, taglineText1.length * 75 + 150);

    tagline.addEventListener("mouseover", function(){
        tagline.style.transition = "color 0.5s ease";
        tagline.style.color = "#e78c6b";
    });

    tagline.addEventListener("mouseout", function(){
        tagline.style.transition = "color 0.5s ease";
        tagline.style.color = "#f2f2f2";
    });

});
