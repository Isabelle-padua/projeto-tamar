function criarBolhas() {
    const section = document.querySelector(".section-primary")
    const createElement = document.createElement("span");
    var size = Math.random() * 60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * (innerWidth/2    )+ 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 3000)
}

setInterval(criarBolhas, 1000);