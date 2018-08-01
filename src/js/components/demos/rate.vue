<template>
<section class="demo-box">
  <p class="title">默认</p>
  <wayo-rate :score='4'/>
  <p class="title">半星</p>
  <wayo-rate :score='4.6'/>
  <p class="title">显示分值</p>
  <wayo-rate :score='3.2' :show-score="true"/>
  <p class="title">分值label</p>
  <wayo-rate :score='4.5' score-label="分" :show-score="true"/>
  <p class="title">自定义颜色</p>
  <wayo-rate :score='4.5' :show-score="true" chosen-color="#ff0000" unchosen-color="#000000"/>
  <p class="title">自定义尺寸</p>
  <wayo-rate :score='4' :show-score="true" :size="20" :label-size="30"/>
</section>
</template>
<script>
export default {};
</script>