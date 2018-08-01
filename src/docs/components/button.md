## Button 按钮

### 类型

```html
<!-- default -->
<wayo-button>默认按钮</wayo-button>
<!-- primary -->
<wayo-button type="primary">主要按钮</wayo-button>
<!-- info -->
<wayo-button type="info">信息按钮</wayo-button>
<!-- success -->
<wayo-button type="success">成功按钮</wayo-button>
<!-- warning -->
<wayo-button type="warning">警告按钮</wayo-button>
<!-- danger -->
<wayo-button type="danger">危险按钮</wayo-button>
```

### 尺寸

```html
<!-- default -->
<wayo-button>默认按钮</wayo-button>
<!-- medium -->
<wayo-button size="medium">Medium按钮</wayo-button>
<!-- large -->
<wayo-button size="large">Large按钮</wayo-button>
<!-- small -->
<wayo-button size="small">Small按钮</wayo-button>
<!-- mini -->
<wayo-button size="mini">Mini按钮</wayo-button>
<!-- fit -->
<wayo-button size="fit">Fit按钮</wayo-button>
```

### 使用图标

```html
<wayo-button type="primary" icon="bus">路线</wayo-button>
<wayo-button type="info" icon="map">地址</wayo-button>
```

### 描边按钮

```html
<wayo-button type="primary" outline>主要按钮</wayo-button>
<wayo-button type="info" outline>信息按钮</wayo-button>
<wayo-button type="success" outline>成功按钮</wayo-button>
<wayo-button type="warning" outline>警告按钮</wayo-button>
<wayo-button type="danger" outline>危险按钮</wayo-button>
```

> `default`类型的按钮描边模式无效

### 圆角按钮

```html
<wayo-button round>默认按钮</wayo-button>
<wayo-button type="primary" round>主要按钮</wayo-button>
<wayo-button type="info" round>信息按钮</wayo-button>
<wayo-button type="success" round>成功按钮</wayo-button>
<wayo-button type="warning" round>警告按钮</wayo-button>
<wayo-button type="danger" round>危险按钮</wayo-button>
```

### 圆形按钮

```html
<wayo-button type="primary" circle icon="bus"></wayo-button>
<wayo-button type="info" circle icon="search"></wayo-button>
<wayo-button type="success" circle icon="camera"></wayo-button>
<wayo-button type="warning" circle icon="map"></wayo-button>
<wayo-button type="danger" circle icon="close"></wayo-button>
```

### 禁用状态
#### 默认类型（无语义）

```html
<wayo-button disabled>默认按钮</wayo-button>
<wayo-button outline disabled>默认+描边</wayo-button>
```

#### 语义类型

```html
<wayo-button type="primary" disabled>主要按钮</wayo-button>
<wayo-button type="info" disabled>信息按钮</wayo-button>
<wayo-button type="success" disabled>成功按钮</wayo-button>
<wayo-button type="warning" disabled>警告按钮</wayo-button>
<wayo-button type="danger" disabled>危险按钮</wayo-button>
```

### 加载状态

```html
<wayo-button size="default" loading>加载中</wayo-button>
<wayo-button size="default" type="primary" loading>加载中</wayo-button>
<wayo-button size="default" type="primary" loading outline>加载中</wayo-button>
<wayo-button size="default" type="info" loading>加载中</wayo-button>
<wayo-button size="default" type="info" loading outline>加载中</wayo-button>
<wayo-button size="default" type="success" loading>加载中</wayo-button>
<wayo-button size="default" type="success" loading outline>加载中</wayo-button>
<wayo-button size="default" type="warning" loading>加载中</wayo-button>
<wayo-button size="default" type="warning" loading outline>加载中</wayo-button>
<wayo-button size="default" type="danger" loading>加载中</wayo-button>
<wayo-button size="default" type="danger" loading outline>加载中</wayo-button>
```

### 自定义颜色和尺寸

```html
<wayo-button 
  size="default" 
  bg-color="#ffffff" 
  font-color="#ed5026" 
  border-color="#cccccc" 
  :width="70" 
  :height="40" 
  :font-size="14">默认</wayo-button>
```