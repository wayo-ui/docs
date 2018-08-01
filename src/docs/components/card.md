## Card 卡片

Wayo对Card组件的定义是：
> 满宽的、具有一定语义的一个块级区域。

可以参考编程语言的`namespace`概念辅助理解。

一个Card组件可以包含多个同语义下的子组件。比如页面的顶栏可以定义为一个card，顶栏区域内可以包含标题、子标题、评分等信息。

### 基本使用
```html
<wayo-card>
  <wayo-card-content>
    <wayo-card-title>标题</wayo-card-title>
    <p>内容内容内容内容内容内容内容内容内容内容内容</p>
  </wayo-card-content>
</wayo-card>
```