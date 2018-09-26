# Icon

## 概述
展示icon，以组件形式引用更快捷方便，同时由于icon的渐变样式使用的background-clip：text语句有兼容问题，因此会在不兼容的设备上以纯色表示

可以将这个组件当作原生SVG使用，没有多余的参数和事件，仅做为一个展示组件


## 代码演示
#### usage:

    <icon type='gitv'></icon>
    
## 示意

以下均为基本类型，example里还有更详细的带颜色的细分类型
<ul class="icon_lists clear">
    
<li>
<i class="icon iconfont icon-warning"></i>
    <div class="name">error</div>
    <div class="fontclass">.icon-warning</div>
</li>

<li>
<i class="icon iconfont icon-gitv"></i>
    <div class="name">奇异果</div>
    <div class="fontclass">.icon-gitv</div>
</li>

<li>
<i class="icon iconfont icon-crown-common"></i>
    <div class="name">vip</div>
    <div class="fontclass">.icon-crown-common</div>
</li>

<li>
<i class="icon iconfont icon-crown-tennis"></i>
    <div class="name">网球会员</div>
    <div class="fontclass">.icon-crown-tennis</div>
</li>

<li>
<i class="icon iconfont icon-v"></i>
    <div class="name">v</div>
    <div class="fontclass">.icon-v</div>
</li>

<li>
<i class="icon iconfont icon-m-crown"></i>
    <div class="name">common－vip</div>
    <div class="fontclass">.icon-m-crown</div>
</li>

<li>
<i class="icon iconfont icon-gold-bag"></i>
    <div class="name">auto－renewal</div>
    <div class="fontclass">.icon-gold-bag</div>
</li>

<li>
<i class="icon iconfont icon-arrow-right"></i>
    <div class="name">right arrow</div>
    <div class="fontclass">.icon-arrow-right</div>
</li>

<li>
<i class="icon iconfont icon-success"></i>
    <div class="name">成功</div>
    <div class="fontclass">.icon-success</div>
</li>

<li>
<i class="icon iconfont icon-cross"></i>
    <div class="name">失败</div>
    <div class="fontclass">.icon-cross</div>
</li>

<li>
<i class="icon iconfont icon-m-warning"></i>
    <div class="name">error</div>
    <div class="fontclass">.icon-m-warning</div>
</li>

<li>
<i class="icon iconfont icon-close-hollow"></i>
    <div class="name">关闭－line</div>
    <div class="fontclass">.icon-close-hollow</div>
</li>

<li>
<i class="icon iconfont icon-cash-tag"></i>
    <div class="name">优惠</div>
    <div class="fontclass">.icon-cash-tag</div>
</li>
    
</ul>

## API
### props
|属性|说明|类型|默认值|
|:----:|:----|:----:|:----:|
|type|icon的类型|String|必传|
|backupColor|用于在使用渐变色icon时对于不兼容设备进行降级的纯色方案 | String | #000 |

### tips
- 如果需要修改样式，请直接像修改原生标签一样修改即可
- 如果出现反复打包样式文件的问题，请升级你的项目的cssnano，并且指给你的OptimizeCSSPlugin
- 由于background-clip：text语句的特殊性，目前的兼容纯色处理是以黑名单形式处理的。
如果发现了黑名单之外的设备或者有更好的兼容判断方法，请通知我

