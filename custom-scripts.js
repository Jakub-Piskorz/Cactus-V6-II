    const slide = n => {
        document.body.style.marginTop = `-${n*100}vh`;
    }

    document.querySelector("#btn-purple").addEventListener("click", slide(1));
    document.querySelector("#btn-red").addEventListener("click", slide(0));