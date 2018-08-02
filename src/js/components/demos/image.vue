<template>
<section class="demo-box">
  <p class="title">基础用法</p>
  <wayo-image :src="demoImg"/>
  
  <p class="title">占位图</p>
  <wayo-image src=""/>

  <p class="title">标签</p>
  <wayo-image :src="demoImg" label="标签"/>
  <wayo-image :src="demoImg" label="标签标签标签"/>
  
  <p class="title">说明</p>
  <wayo-image :src="demoImg" info="说明"/>  
  
  <p class="title">自定义宽高</p>
  <wayo-image :src="demoImg" :width="85" :height="75"/>
  
  <p class="title">自定义等宽</p>
  <wayo-image :src="demoImg" :width="85"/>
</section>
</template>
<script>
export default {
  data(){
    return {
      demoImg: require.context('../../../assets/',false,/\.png$/)('./logo.png')
    };
  }
};
</script>
<style lang="scss">

</style>