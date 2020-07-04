export const nextSlideButton = (color = "black", toggle = "show", delay = 0) => {
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
    setTimeout(() => {
        if (thisCall + 1 !== nextSlideButtonCalls) {
            return;
        };
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
};
