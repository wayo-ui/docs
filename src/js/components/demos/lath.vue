<template>
<section class="demo-box fill">
  <p class="title">基础用法</p>
  <wayo-block>
    <wayo-lath  border-bottom icon-position="top">
      <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
      <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
    </wayo-lath>
  </wayo-block>

  <p class="title">标题</p>
  <wayo-block>
    <wayo-lath>
      <wayo-lath-header title="标题"></wayo-lath-header>
    </wayo-lath>
    <wayo-lath border-top border-bottom>
      <wayo-lath-header subtitle="副标题"></wayo-lath-header>
    </wayo-lath>
    <wayo-lath>
      <wayo-lath-header title="标题" subtitle="副标题" ></wayo-lath-header>
    </wayo-lath>
  </wayo-block>
  
  <p class="title">内容</p>
  <wayo-block>
    <wayo-lath>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
    </wayo-lath>
    <wayo-lath border-top border-bottom>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
    </wayo-lath>
    <wayo-lath>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
    </wayo-lath>
  </wayo-block>
  
  <p class="title">图标</p>
  <wayo-block>
    <wayo-lath icon="star-fill" border-bottom>
      <wayo-lath-header title="标题"></wayo-lath-header>
    </wayo-lath>
    <wayo-lath icon="location" border-bottom>
      <wayo-lath-header subtitle="副标题" ></wayo-lath-header>
    </wayo-lath>
    <wayo-lath border-bottom icon="bus" icon-color="#ff0000" icon-position="top">
      <wayo-lath-header title="标题" subtitle="副标题" ></wayo-lath-header>
    </wayo-lath>
    <wayo-lath icon="phone" icon-position="top">
      <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
    </wayo-lath>
  </wayo-block>
  
  <p class="title">尾部</p>
  <wayo-block>
    <wayo-lath border-top border-bottom icon="location" >
      <wayo-lath-header subtitle="副标题"></wayo-lath-header>
      <wayo-lath-tail icon="arrow-right"></wayo-lath-tail>
    </wayo-lath>
    <wayo-lath  border-bottom icon="location">
      <wayo-lath-header title="标题"></wayo-lath-header>
      <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
    </wayo-lath>
    <wayo-lath  border-bottom icon="location" icon-position="top">
      <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
      <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
    </wayo-lath>
  </wayo-block>
  
  <p class="title">平铺布局</p>
  <wayo-block>
    <wayo-lath icon="location" icon-position="top" inline>
      <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
      <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
      <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
    </wayo-lath>
  </wayo-block>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.demo-box{
  background-color: #f4f4f4;
}
</style>