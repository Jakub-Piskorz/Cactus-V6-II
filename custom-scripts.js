    const slide = (section, attr) => {
        if ((slideInProgress === false || attr === "forced") && !RWD) {
            document.querySelector("#container").style.marginTop = `-${sectionLocations[section]}px`;
            currentSection = section;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 900);
        } else if (attr === "click") document.querySelector("#main").scrollBy(0, 700);
    }

    const slideOnScroll = () => {
        if (slideInProgress === false && RWD === false)
            if (event.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (event.deltaY < 0 && currentSection > 0) slide(currentSection - 1);
    }
    const updateLocations = attr => {
        sectionLocations = [0];
        sections.forEach((x, i) => sectionLocations.push(sections[i].clientHeight + sectionLocations[i]));
        slide(currentSection, attr);
        if (!RWD) document.querySelector("#main").scroll(0, 0);
    }
    const switchRwd = () => {
        if (RWD === true && window.innerWidth >= 900) {
            RWD = false;
            document.querySelector("#container").style.marginTop = 0;
        }
        if (RWD === false && window.innerWidth < 900) {
            RWD = true;
            document.querySelector("#container").style.marginTop = 0;
        }
    }

    let slideInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionLocations = [];
    let currentSection = 0;
    let RWD = window.innerWidth < 900 ? true : false;

    document.querySelector("#btn-purple").addEventListener("click", event => slide(currentSection + 1, "click"));
    document.querySelector(".back").addEventListener("click", event => window.open("https://digital24.pl", "_self"));
    document.querySelector("#nav").addEventListener("click", event => window.open("https://digital24.pl", "_self"));
    document.querySelector(".link").addEventListener("click", event => window.open("https://digital24.pl/wyzwalanie-lamp/cactus-v6-ii-bezprzewodowy-wyzwalacz-do-lamp-blyskowych.html", "_self"));
    document.querySelector("#btn-red").addEventListener("click", event => slide(currentSection + 1, "click"));
    window.addEventListener("wheel", slideOnScroll);
    window.onresize = event => {
        updateLocations(true);
        switchRwd();
    };
    updateLocations();