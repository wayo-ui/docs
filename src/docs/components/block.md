## Block 区域

Wayo对Block组件的定义是：
> 满宽的、独立的且具有一定语义的一个块级区域。

可以参考编程语言的`namespace`概念辅助理解。

一个Block组件可以包含多个同语义下的子组件。比如页面的顶栏可以定义为一个Block，顶栏区域内可以包含标题、子标题、评分等信息。

### 基础用法
```html
<wayo-block>
  <wayo-block-header>标题栏</wayo-block-header>
  <wayo-block-content>
    <wayo-block-title>内容标题</wayo-block-title>
    <p>内容内容内容内容内容内容内容内容内容内容内容</p>
  </wayo-block-content>
</wayo-block>
```

### 自定义内容
```html
<wayo-block>
  <wayo-lath border-bottom>
    <wayo-lath-header title="评价"></wayo-lath-header>
    <wayo-lath-tail icon="arrow-right" label="1139条"></wayo-lath-tail>
  </wayo-lath>
  <wayo-lath>
    <div class="custom-content">
      <div class="custom-content__header">
        <span class="custom-content__uname">吃货甲</span>
        <div class="custom-content__rate">
          <span class="custom-content__date">4月2号</span>
          <wayo-rate :score="4.5" :size="12"/>
        </div>
      </div>
      <p class="custom-content__content">
        今天邀请石家庄来的宾客，就是工作餐了，现在不能大吃大喝自己请客也不能太破费，不降请客今天邀请石家庄来的宾客，就是工作餐了今天邀请石家庄来...
      </p>
      <wayo-flex-box class="custom-content__gallery" :gutter="10">
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
      </wayo-flex-box>
    </div>
  </wayo-lath>
</wayo-block>
```
