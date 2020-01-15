    const slide = (section, attr) => {
        if ((slideInProgress === false || attr === "forced") && window.innerWidth >= 900) {
            document.querySelector("#container").style.marginTop = `-${sectionLocations[section]}px`;
            currentSection = section;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 900);
        }
    }
    const slideOnScroll = () => {
        if (slideInProgress === false)
            if (event.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (event.deltaY < 0 && currentSection > 0) slide(currentSection - 1);
    }
    const updateLocations = attr => {
        sectionLocations = [0];
        sections.forEach((x, i) => sectionLocations.push(sections[i].clientHeight + sectionLocations[i]));
        document.querySelector("#container").style.transition = "none";
        slide(currentSection, attr);
        document.querySelector("#main").scroll(0, 0);
        document.querySelector("#container").style.transition = "0.7s ease-in-out";
    }
    const switchRwd = () => {
        if (!RWD && window.outerWidth >= 900) {
            RWD = true;
            document.querySelector("#container").style.marginTop = 0;
            console.log("switched to false");
        }
        if (RWD && window.outerWidth < 900) {
            RWD = false;
            document.querySelector("#container").style.marginTop = 0;
            console.log("switched to true");
        }
    }

    let slideInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionLocations = [];
    let currentSection = 0;
    let RWD = window.innerWidth < 900 ? true : false;

    document.querySelector("#btn-purple").addEventListener("click", event => { slide(currentSection + 1);
        alert("triggered!"); });
    document.querySelector(".back").addEventListener("click", function() { window.open("https://digital24.pl", "_self") });
    document.querySelector("#nav").addEventListener("click", function() { window.open("https://digital24.pl", "_self") });
    document.querySelector(".link").addEventListener("click", function() { window.open("https://digital24.pl/wyzwalanie-lamp/cactus-v6-ii-bezprzewodowy-wyzwalacz-do-lamp-blyskowych.html", "_self") });
    document.querySelector("#btn-red").addEventListener("click", function() { slide(currentSection + 1) });
    window.addEventListener("wheel", slideOnScroll);
    window.onresize = function() {
        updateLocations(true);
        switchRwd();
    };
    updateLocations();