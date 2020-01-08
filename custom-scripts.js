    const slide = n => {
        if (slideInProgress === false) {
            document.querySelector("#container").style.marginTop = `-${sectionHeights[n]}px`;
            currentSection = n;
            slideInProgress = true;
            setTimeout(function() { slideInProgress = false }, 1100);
        }
    }
    const slideWheel = event => {
        if (slideInProgress === false)
            if (event.deltaY > 0 && currentSection + 1 < sections.length) slide(currentSection + 1);
            else if (event.deltaY < 0 && currentSection > 0) slide(currentSection - 1);

    }

    document.querySelector("#btn-purple").addEventListener("click", function() { slide(1) });
    document.querySelector("#btn-red").addEventListener("click", function() { slide(0) });
    document.querySelector(".back").addEventListener("click", function() { window.open("https://digital24.pl", "_self") });
    document.addEventListener("load", function() { window.scrollTo(0, 0) });
    window.addEventListener("wheel", slideWheel);

    slideInProgress = false;
    let sections = document.querySelectorAll(".section");
    let sectionHeights = [0];
    sections.forEach((x, i) => sectionHeights.push(sections[i].clientHeight + sectionHeights[i]));
    let currentSection = 0;



    //setInterval(function() { console.log(slideInProgress) }, 100);