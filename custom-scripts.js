    const slide = (section, attr) => {
        if ((slideInProgress === false || attr === "forced") && !RWD) {
            document.querySelector("#container").style.marginTop = `-${sectionLocations[section]}px`;
            currentSection = section;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 900);
        } else if (attr === "click") document.querySelector("#main").scrollBy(0, 700);
        slideMarker("white", "hide");
        if (currentSection !== 0 && currentSection < sectionLocations.length - 1) {
            if (currentSection === 2) {
                setTimeout(() => { slideMarker("white") }, 2000);
            } else {
                setTimeout(() => { slideMarker("black") }, 2000);
            }
        } else slideMarker("black", "hide");
    }

    const slideOnScroll = () => {
        if (slideInProgress === false && RWD === false)
            if (event.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (event.deltaY < 0 && currentSection > 0) slide(currentSection - 1);
    }
    const updateLocations = attr => {
        sectionLocations = [0];
        sections.forEach((x, i) => sectionLocations.push(sections[i].clientHeight + sectionLocations[i]));
        sectionLocations.pop();
        slide(currentSection, attr);
        if (!RWD) document.querySelector("#main").scroll(0, 0);
    }
    const switchRwd = () => {
        if (RWD === true && (window.innerWidth >= 900 || window.innerHeight >= 810)) {
            RWD = false;
            document.querySelector("#container").style.marginTop = 0;
        }
        if (RWD === false && (window.innerWidth < 900 || window.innerHeight < 810)) {
            RWD = true;
            document.querySelector("#container").style.marginTop = 0;
        }
    }
    const slideMarker = (color = "black", toggle = "show", delay = 0) => {
        if (slideMarkerInProgress) return;
        slideMarkerInProgress = true;
        setTimeout(() => {
            if (toggle === "show") {
                document.querySelector("#slide-marker").style.left = "50%";
                document.querySelector("#slide-marker").style.opacity = 1;
                setTimeout(() => {
                    document.querySelector("#slide-marker").style.transition = "ease-in-out 0.7s";
                    document.querySelector("#slide-marker").style.borderColor = color;
                }, 10);
                setTimeout(() => { document.querySelector("#slide-marker").style.transition = "" }, 700);
            } else if (toggle === "hide") {
                document.querySelector("#slide-marker").style.left = "-50%";
                document.querySelector("#slide-marker").style.opacity = 0;
            }
        }, delay)
        slideMarkerInProgress = false;

    }

    let slideInProgress = false;
    let slideMarkerInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionLocations = [];
    let currentSection = 0;
    let RWD = window.innerWidth < 900 ? true : false;

    document.querySelector("#btn-purple").addEventListener("click", event => slide(currentSection + 1, "click"));
    document.querySelector("#slide-marker").addEventListener("click", event => slide(currentSection + 1));
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