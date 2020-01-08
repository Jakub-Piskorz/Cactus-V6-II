    const slide = (section, forced = false) => {
        if (slideInProgress === false || forced === true) {
            document.querySelector("#container").style.marginTop = `-${sectionLocations[section]}px`;
            currentSection = section;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 900);
        }
    }
    const slideOnScroll = scrollEvent => {
        if (slideInProgress === false)
            if (scrollEvent.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (scrollEvent.deltaY < 0 && currentSection > 0) slide(currentSection - 1);
    }
    const updateLocations = (forced = false) => {
        sectionLocations = [0];
        sections.forEach((x, i) => sectionLocations.push(sections[i].clientHeight + sectionLocations[i]));
        slide(currentSection, forced);
    }

    slideInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionLocations = [];
    let currentSection = 0;

    document.querySelector("#btn-purple").addEventListener("click", function() { slide(1) });
    document.querySelector(".back").addEventListener("click", function() { window.open("https://digital24.pl", "_self") });
    window.addEventListener("wheel", slideOnScroll);
    window.onresize = function() { updateLocations(true) };
    updateLocations();


    //setInterval(function() { console.log(slideInProgress) }, 100);