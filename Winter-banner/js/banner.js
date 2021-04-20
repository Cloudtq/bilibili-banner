let startingPoint;
const header = document.querySelector("header");

header.addEventListener("mouseenter", (e) => {
    startingPoint = e.clientX;
    header.classList.add("moving");
});

header.addEventListener("mouseout", (e) => {
    header.classList.remove("moving");
    header.style.setProperty("--percentage", 0.5);
});

header.addEventListener("mousemove", (e) => {
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;
    header.style.setProperty("--percentage", percentage);
});

// 难点在于如何让其鼠标进入时，不会忽然闪一下，因此要为其设置一个初始值。
// (e.clientX - startingPoint) / window.outerWidth + 0.5
// 该公式中 startingPoint 保存了我们鼠标进入时的位置，当我们鼠标进入时，e.clientX的值也是鼠标刚进入的值。
// 因此无论你从哪里进入，该值都会是从0.5开始。 最大值 1.5  最小值 -0.5
// 我们设计三个公式，
// 第一个公式：让其中午图层在0.5时显示，在1时透明度为0，
// 第二个公式：早上图层在0.5时透明度为0，在0.25时透明度为1
// 第三个公式：窗口积雪图层在0.9时为0，在1时为1
// 其自变量是 percentage