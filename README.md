# bilibili-banner

偶然看到 b 站 首图的动画效果，觉得很有趣，网上找资料仿写了一下，打算把四季的都收集起来，目前只有春、秋、冬，缺一个夏，应该快来了吧（2021-4-20）

### 春

![spring](https://github.com/Cloudtq/bilibili-banner/blob/main/images/springbanner.gif)

### 秋

![spring](https://github.com/Cloudtq/bilibili-banner/blob/main/images/autumnbanner.gif)

### 冬

![spring](https://github.com/Cloudtq/bilibili-banner/blob/main/images/winterbanner.gif)

### 实现原理

简单说一下实现原理：
首先这种效果是通过多个图层的不同速度的移动，造成的视觉差效果，看起来非常好看。

    一、通过调整不同图层的前后层级，还有初始位置。

    二、通过监听鼠标进入，移动，移出事件，对图层的tranlateX（offset）与透明度进行修改。

    三、修改tranlate与透明度的方式有两种：
        1、通过在js使用变量保存到css中，用css的calc计算得出偏移量。
        2、直接通过js计算，然后用js操作对象的css属性。

    四、春、冬的樱花与雪花效果网上的具体实现有很多。

    五、鼠标在移出时，需要将图层恢复到移动前的初始状态，因此需要加上一个过渡效果，让其平滑的恢复。

    六、由于鼠标移出添加的过渡效果，在下一次鼠标进入时需要清除掉，不然会因此过渡效果出现卡顿。

    七、秋的效果还需要添加高斯模糊的效果，通过一个二次函数，使其移动到两边时，blur的值变大，模糊加深，在中间blur小，清晰。
