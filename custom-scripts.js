    const slide = section => {
        if (slideInProgress === false) {
            document.querySelector("#container").style.marginTop = `-${sectionHeights[section]}px`;
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

    document.querySelector("#btn-purple").addEventListener("click", function() { slide(1) });
    document.querySelector(".back").addEventListener("click", function() { window.open("https://digital24.pl", "_self") });
    document.addEventListener("load", function() { window.scrollTo(0, 0) });
    window.addEventListener("wheel", slideOnScroll);

    slideInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionHeights = [0];
    sections.forEach((x, i) => sectionHeights.push(sections[i].clientHeight + sectionHeights[i]));
    let currentSection = 0;



    //setInterval(function() { console.log(slideInProgress) }, 100);