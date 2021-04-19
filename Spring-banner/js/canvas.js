let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let sw = canvas.width
let sh = canvas.height

let flowers = {
    'f1': './images/f1.png',
    'f2': './images/f2.png',
}

//图片加载
function loading() {
    let allAmount = Object.keys(flowers).length
    let count = 0
    for (k in flowers) {
        let src = flowers[k]
        flowers[k] = new Image()
        flowers[k].src = src

        flowers[k].onload = function() {
            count++
            if (count === allAmount) {
                start()
            }
        }
    }
}

//定义花瓣类
class Flower {
    constructor(img, x, y, w, h) {
        this.img = img
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    //渲染
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    //飘落
    update() {
        if (this.x > sw || this.y > sh) {
            this.del = true
        } else {
            this.del = false
        }
        this.x += Math.random() * 2 + 1
        this.y += Math.random() * 2 + 1
    }
}

let fs = [];
//创建花瓣
function createFlower() {
    let wh = rand(0, 15);
    let flower = null;
    if (fs.length < 35) {
        if (rand(0, 10) > 5) {
            flower = new Flower(flowers['f1'], rand(20, sw - 20), rand(0, 10), wh, wh);
        } else {
            flower = new Flower(flowers['f2'], rand(20, sw - 20), rand(0, 10), wh, wh);
        }
        fs.push(flower);
    }
}
//渲染
function allDraw() {
    for (i = 0; i < fs.length; i++) {
        let flower = fs[i];
        if (flower.del) {
            fs.splice(i, 1);
            i--;
            continue;
        }
        flower.draw();
        flower.update();
    }
}

//随机数
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}