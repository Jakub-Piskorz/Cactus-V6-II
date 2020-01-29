    const slide = (section, attr) => {
        if ((slideInProgress === false || attr === "forced") && !RWD) {
            document.querySelector("#container").style.marginTop = `-${sectionLocations[section]}px`;
            currentSection = section;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 900);
            updateNav(section);
        } else if (attr === "click") document.querySelector("#main").scrollBy(0, 700);
        nextSlideButton("white", "hide");
        if (currentSection !== 0 && currentSection < sectionLocations.length) {
            if (currentSection === 2) {
                setTimeout(() => { nextSlideButton("white", "show", 2000) }, 10);
            } else {
                setTimeout(() => { nextSlideButton("black", "show", 2000) }, 10);
            }
        }
    }
    const updateNav = (section = currentSection) => {
        for (let n of document.querySelectorAll("nav a")) n.style.color = "#d7000f";
        document.querySelectorAll("nav a")[section + 1].style.color = "black";
    }
    const slideOnScroll = () => {
        if (slideInProgress === false && RWD === false)
            if (event.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (event.deltaY < 0 && currentSection > 0) slide(currentSection - 1);
    }
    const updateLocations = () => {
        sectionLocations = [0];
        sections.forEach((x, i) => sectionLocations.push(sections[i].clientHeight + sectionLocations[i]));
        sectionLocations.pop();
        slide(currentSection);
        if (!RWD) document.querySelector("#main").scroll(0, 0);
        updateNav();
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
    const nextSlideButton = (color = "black", toggle = "show", delay = 0) => {
        if (toggle === "hide") {
            document.querySelector("#slide-marker").style.transition = "";
            setTimeout(() => {
                document.querySelector("#slide-marker").style.left = "-50%";
                document.querySelector("#slide-marker").style.opacity = 0;
            }, 1);
            return;
        }
        let thisCall = nextSlideButtonCalls;
        nextSlideButtonCalls++;
        console.log(`This call: ${thisCall}, calls: ${nextSlideButtonCalls}`);
        setTimeout(() => {
            if (thisCall + 1 !== nextSlideButtonCalls) {
                return;
            };
            console.log(`I've toggled marker on call: ${thisCall}. Calls: ${nextSlideButtonCalls}`);
            if (toggle === "show" && currentSection !== 0 && currentSection < sectionLocations.length - 1) {
                document.querySelector("#slide-marker").style.transition = "";
                document.querySelector("#slide-marker").style.opacity = 0;
                setTimeout(() => {
                    document.querySelector("#slide-marker").style.left = "50%";
                }, 1);
                setTimeout(() => {
                    document.querySelector("#slide-marker").style.transition = `ease-in-out 0.7s`;
                    document.querySelector("#slide-marker").style.opacity = 1;
                    document.querySelector("#slide-marker").style.borderColor = color;
                }, 3);
                setTimeout(() => {
                    document.querySelector("#slide-marker").style.transition = "";
                }, 696);
            }
            nextSlideButtonCalls--;
        }, delay + 700);
    }

    let slideInProgress = false;
    let nextSlideButtonCalls = 0;
    let sections = document.querySelectorAll(".section");
    let sectionLocations = [];
    let currentSection = 0;
    let RWD = window.innerWidth < 900 ? true : false;

    document.querySelector("#btn-purple").addEventListener("click", event => slide(currentSection + 1, "click"));
    document.querySelector("#slide-marker").addEventListener("click", event => slide(currentSection + 1));
    document.querySelector(".back").addEventListener("click", event => window.open("https://digital24.pl", "_self"));
    document.querySelector(".link").addEventListener("click", event => window.open("https://digital24.pl/wyzwalanie-lamp/cactus-v6-ii-bezprzewodowy-wyzwalacz-do-lamp-blyskowych.html", "_self"));
    document.querySelector("#btn-red").addEventListener("click", event => slide(currentSection + 1, "click"));

    window.addEventListener("wheel", slideOnScroll);
    window.onresize = event => {
        updateLocations();
        switchRwd();
    };
    updateLocations();