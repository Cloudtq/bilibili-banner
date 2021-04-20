const images = document.querySelectorAll("header > div > img");
const header = document.querySelector("header");

header.addEventListener("mouseenter", () => {
    for (let image of images) {
        image.style.transition = "all .2s";
    }
    setTimeout(() => {
        for (let image of images) {
            image.style.transition = "none";
        }
    }, 300);
});

header.addEventListener("mousemove", (e) => {
    let percentage = e.clientX / window.outerWidth;
    console.log(percentage);
    let offset = 10 * percentage;
    let blur = 20;

    for (let [index, image] of images.entries()) {
        offset *= 1.3;

        let blurValue = Math.pow(index / images.length - percentage, 2) * blur;

        image.style.setProperty("--offset", `${offset}px`);
        image.style.setProperty("--blur", `${blurValue}px`);
    }
});

header.addEventListener("mouseleave", () => {
    for (let image of images) {
        image.style.transition = "all .5s";
        image.style.setProperty("--offset", "0px");
        image.style.setProperty("--blur", "0px");
    }
});

//延时
const sleep = (time) => {
    // new Promise 后会立即执行
    return new Promise((resolve) => setTimeout(resolve, time));
};

//眨眼
const makeBlink = async() => {
    if (images[1]) {
        await sleep(50);
        images[1].src = "./images/bilibili-autumn-2-zha.png";
        await sleep(50);
        images[1].src = "./images/bilibili-autumn-2-bi.png";
        await sleep(350);
        images[1].src = "./images/bilibili-autumn-2.webp";
        setTimeout(makeBlink, 5000);
    }
};

setTimeout(makeBlink, 5000);