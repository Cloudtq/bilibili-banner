var container = document.querySelector('.animated-banner')
var imgs = document.querySelectorAll('img')

container.addEventListener('mouseenter', function(e) {
    this.x = e.clientX
    imgs.forEach(item => {
        item.style.transition = 'none'
    })
})
container.addEventListener('mousemove', function(e) {
    //1、第一张图
    //鼠标移动时的长度
    // transform: scale(1) translate(0px, -15px) rotate(0deg); opacity: 1;

    this._x = e.clientX
    let disX = this.x - this._x
    let translateX_1 = disX / 16.4
    imgs[0].style.transform = `scale(1) translate(${translateX_1}px, -17.4194px) rotate(0deg)`

    //2、第二张图
    // transform: scale(1) translate(1100px, -15px) rotate(0deg); opacity: 1;
    let translateX_2 = 1277.42 + disX / 16.4
    imgs[1].style.transform = `scale(1) translate(${translateX_2}px, 0px) rotate(0deg)`

    //3、第三张图
    let translateX_3 = 783.871 + disX / 12
    imgs[2].style.transform = `scale(1) translate(${translateX_3}px, 0px) rotate(0deg)`


    //4、第四张图
    let translateX_4 = -739.7 + disX / 3.7
    imgs[3].style.transform = `scale(1) translate(${translateX_4}px, 0px) rotate(0deg)`

    //5、第五张图
    let translateX_5 = 705.5 + disX / 14.5
    imgs[4].style.transform = `scale(1) translate(${translateX_5}px, 52.2px) rotate(0deg)`

    //6、第六张图
    let translateX_6 = 292.645 + disX / 29.5
    let opacity_6 = -disX * 0.0012
    imgs[5].style.transform = `scale(1) translate(${translateX_6}px, 42.271px) rotate(0deg)`
    imgs[5].style.opacity = `${opacity_6}`

    //7、第七张图
    let translateX_7 = 130.065 + disX / 2.34
    imgs[6].style.transform = `scale(1) translate(${translateX_7}px, 16.258px) rotate(0deg)`

    //8.第八张图
    let translateX_8 = -406.452 + disX / 1.97
    imgs[7].style.transform = `scale(1) translate(${translateX_8}px, 56.9032px) rotate(0deg)`

    //9.第九张图
    let translateX_9 = -278.71 + disX / 4.1
    let opacity_9 = disX * 0.00110
    imgs[8].style.transform = `scale(1) translate(${translateX_9}px, 18.5806px) rotate(0deg)`
    imgs[8].style.opacity = `${opacity_9}`

    //10.第10张图
    let translateX_10 = -394.839 + disX / 2.82
    let opacity_10 = disX * 0.00104
    imgs[9].style.transform = `scale(1) translate(${translateX_10}px, 37.1613px) rotate(0deg)`
    imgs[9].style.opacity = `${opacity_10}`

    //11.第11张图
    let translateX_11 = -104.516 + disX / 1.459
    imgs[10].style.transform = `scale(1) translate(${translateX_11}px, 15.677px) rotate(0deg)`

    //12.第12张图
    let translateX_12 = 116.129 + disX / 1.093
    imgs[11].style.transform = `scale(1) translate(${translateX_12}px, 0px) rotate(0deg)`

    //13.第13张图
    let translateX_13 = 250.839 + disX / 1.1
    imgs[12].style.transform = `scale(1) translate(${translateX_13}px, 15.677px) rotate(0deg)`

    //14.第14张图
    let translateX_14 = 2438.71 + disX / 0.78
    imgs[13].style.transform = `scale(1) translate(${translateX_14}px, 0px) rotate(0deg)`

    //15.第15张图
    let translateX_15 = -1161.29 + disX / 0.547
    imgs[14].style.transform = `scale(1) translate(${translateX_15}px, 0px) rotate(0deg)`

})
container.addEventListener('mouseleave', function() {
    imgs.forEach(item => {
        item.style.transition = 'all .5s'
    })

    imgs[0].style.transform = 'scale(1) translate(0px, -17.4194px)'
    imgs[1].style.transform = 'scale(1) translate(1277.42px, 0px) '
    imgs[2].style.transform = 'scale(1) translate(783.871px, 0px)'
    imgs[3].style.transform = 'scale(1) translate(-739.742px, 0px)'

    imgs[4].style.transform = 'scale(1) translate(705.484px, 52.2581px)'
    imgs[5].style.transform = 'scale(1) translate(292.645px, 42.271px)'
    imgs[5].style.opacity = '0'

    imgs[6].style.transform = 'scale(1) translate(130.065px, 16.2581px) '
    imgs[7].style.transform = 'scale(1) translate(-406.452px, 56.9032px)'
    imgs[8].style.transform = 'scale(1) translate(-278.71px, 18.5806px) '
    imgs[8].style.opacity = '0'

    imgs[9].style.transform = 'scale(1) translate(-394.839px, 37.1613px)'
    imgs[9].style.opacity = '0'

    imgs[10].style.transform = 'scale(1) translate(-104.516px, 15.6774px)'
    imgs[11].style.transform = 'scale(1) translate(116.129px, 0px)'
    imgs[12].style.transform = 'scale(1) translate(250.839px, 15.6774px) '
    imgs[13].style.transform = 'scale(1) translate(2438.71px, 0px)'
    imgs[14].style.transform = 'scale(1) translate(-1161.29px, 0px)'

})