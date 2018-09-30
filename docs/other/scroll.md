# Scroll 滚动
## 概述
滚动组件，TV端使用。自动切换长短滚，支持不规则card大小，支持滚动条。

使用ref调用组件内方法的方式实现focus逻辑。

## 代码示例
```vue
<template>
    <Scroll type="horizontal" :width="18" :height="3.9" :posArr="posArr" ref="scroll">
       <AlbumList type="port" :data="data.plst" :config="config"></AlbumList>
    </Scroll>
</template>
<script>
    export default {
        data() {
            return {
                posArr: [1.1,2.2,3.3,4.4],
            };
        }
        methods: {
            // 用户每次按上下左右时up/down/left/right都会调用，组件内部去计数（现在在外部，需修改）以及切换滚动类型
            up() {
                this.$refs.scroll.up();
            },
            down() {
                this.$refs.scroll.down();
            },
            left() {
                this.$refs.scroll.left();
            },
            right() {
                this.$refs.scroll.right();
            },
        }
    }
</script>
```

## API
### props
|属性|说明|类型|默认值|是否必填|
|:--|:--|:--|:--|:--|:--|
|type|滚动类型|String|- vertical(垂直滚动)或horizontal(水平滚动)|是|
|width|滚动区域宽度|Number|-|是|
|height|滚动区域高度|Number|-|是|
|posArr|滚动停止位置数组，单位rem，若不填，则认为组件内部无需focus|Array[Number]|[]|否|
|shortScrollSpeed|短滚速度，单位rem|Number|20|否|
|longScrollSpeed|长滚速度，单位rem|Number|30|否|
|contentLength|滚动内容总长度，一般不用填，如果无法准确计算内容总长度时才需要填|String|auto|否|

### events
|属性|说明|返回值|
|:--|:--|:--|:--|
|on-scrollEnd|滚动结束，有个参数focusIdx表示要focus的元素下标|无|

### slot
|名称|说明|
|:--|:--|
|content|自定义content内容|

### methods
|名称|说明|
|:--|:--|
|up()|向上滚动|
|down()|向下滚动|
|left()|向左滚动|
|right()|向右滚动|

### tips
1. 动画原理，基于web animation api,使用polyfill实现的长短滚，都是使用animate函数实现的，因为animate与css动画有冲突。
2. 长短滚切换原理，所有滚动以短滚开始，如果短滚尚未结束用户按键的次数过多，使得按键次数与实际滚动次数差值过大(目前是5)，则下一次滚动换成长滚，用户停止按键超过一定时间（目前是200ms），则滚动停止，按键次数与实际滚动次数清0。
3. 关于按键截获，暂没有使用vue mixin的方式，使用的是工具函数添加事件监听的方式，用户按键时会计数但不一定会真正出发滚动。
4. 当滚动停止时，不论长短滚，滚动自动停止在posArr中规定的下一个位置处。
