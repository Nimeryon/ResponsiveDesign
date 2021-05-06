window.onload = (e) => {
    Resize();
}

window.onresize = (e) => {
    Resize();
}

function Resize() {
    let button = document.getElementById("cozy-button");
    // Media with size >= 992
    if (window.innerWidth >= 992) {
        document.getElementById("cozy-text").appendChild(button);
        return;
    }

    // Media with size < 992
    document.getElementById("cozy-div").appendChild(button);
}