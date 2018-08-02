## Toast 轻提示

### 基础用法
```javascript
this.$toast({
  type: 'text',
  mask: false,
  message: '操作成功',
  duration: 3000
});
```

#### 选项
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|type|类型|string|否|text/success/fail/loading|text|
|message|文案|string/Array|否|-|-|
|duration|触发自动消失的时间间隔|number|否|-|3000|
|mask|显示全屏遮层|boolean|否|-|false|

</div>

### 快捷API
除了以上调用方式，Wayo同时提供以下几个快捷API。
#### 成功提示
```javascript
this.$toast.success('操作成功');
```

#### 失败提示
```javascript
this.$toast.fail('操作失败');
```

#### 加载提示
```javascript
this.$toast.loading('加载中');
```

### 多行文案
将`message`设置为数组将会将数组中每个元素为显示为一行。
```javascript
this.$toast.success([
  '操作成功',
  '请按提示继续操作'
]);
```