<template>
<section class="demo-box">
  <p class="title">基础用法</p>
  <wayo-showcase>
    <wayo-showcase-item v-for="(item,index) in list" 
      :key="`showcase-item-${index}`"
      :thumb="item.thumb">
       {{item.info}}
    </wayo-showcase-item>
  </wayo-showcase>
  
  <p class="title">自定义操作区背景</p>
  <wayo-showcase nav-bg="#ff0000">
    <wayo-showcase-item v-for="(item,index) in list" 
      :key="`showcase-item-${index}`"
      :thumb="item.thumb">
       {{item.info}}
    </wayo-showcase-item>
  </wayo-showcase>
  <wayo-showcase :nav-bg="bgImg">
    <wayo-showcase-item v-for="(item,index) in list" 
      :key="`showcase-item-${index}`"
      :thumb="item.thumb">
       {{item.info}}
    </wayo-showcase-item>
  </wayo-showcase>
</section>
</template>

<script>
export default {
  data(){
    return {
      bgImg: 'http://map.sogou.com/adpub/images/homepage/151434916690543.png',
      list: [{
        thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516062089.jpg',
        info: '第一个'
      },{
        thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.jpg',
        info: '第二个'
      },{
        thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.jpg',
        info: '第三个'
      },{
        thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2525528688.jpg',
        info: '第四个'
      },{
        thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.jpg',
        info: '第五个'
      },{
        thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526767688.jpg',
        info: '第六个'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>