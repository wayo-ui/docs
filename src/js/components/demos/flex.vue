<template>
<section class="demo-box">
  <p class="title">栅格</p>
  <wayo-flex-box class="box">
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
    <wayo-flex-cell class="cell" :span="1"></wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="8" class="cell">8</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="1" class="cell">1</wayo-flex-cell>
  </wayo-flex-box>

  <p class="title">对齐方式</p>
  <p class="subtitle">首对齐</p>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">尾对齐</p>
  <wayo-flex-box class="box" justify="end">
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">居中布局</p>
  <wayo-flex-box class="box" justify="center">
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">首尾对齐</p>
  <wayo-flex-box class="box" justify="space-between">
    <wayo-flex-cell :span="6" class="cell">6</wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">居中对齐，每个间隔均相等</p>
  <wayo-flex-box class="box" justify="space-evenly">
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">居中对齐，子元素间隔相等，首尾间隔相等</p>
  <wayo-flex-box class="box" justify="space-around">
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
  </wayo-flex-box>

  <p class="title">列间距</p>
  <wayo-flex-box :gutter="20">
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">3</wayo-flex-cell>
  </wayo-flex-box>

  <p class="title">列偏移</p>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" :offset="4" class="cell">
      offset: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" class="cell">
      offset: 0
    </wayo-flex-cell>
    <wayo-flex-cell :span="3" :offset="2" class="cell">
      offset: 2
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="4" :offset="1" class="cell">
      offset: 1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" :offset="2" class="cell">
      offset: 2
    </wayo-flex-cell>
  </wayo-flex-box>

  <p class="title">纵向排列</p>
  <wayo-flex-box class="box" direction="column" :height="100">
    <wayo-flex-cell :span="8" class="cell">8</wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  </wayo-flex-box>
  
  <p class="title">反向排列</p>
  <wayo-flex-box class="box" direction="row-reverse">
    <wayo-flex-cell :span="6" class="cell">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="2" class="cell">
      3
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" direction="column-reverse" :height="200">
    <wayo-flex-cell :span="6" class="cell">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="2" class="cell">
      3
    </wayo-flex-cell>
  </wayo-flex-box>

  <p class="title">九宫格</p>
  <p class="subtitle">横向</p>
  <wayo-flex-box class="box" direction="row" :wrap="true">
    <wayo-flex-cell :span="4" class="cell">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      3
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      4
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      5
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      7
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      8
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      9
    </wayo-flex-cell>
  </wayo-flex-box>
  <p class="subtitle">纵向</p>
  <wayo-flex-box class="box" direction="column" :wrap="true" :height="300">
    <wayo-flex-cell :span="4" class="cell cell-column">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      3
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      4
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      5
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      7
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      8
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      9
    </wayo-flex-cell>
  </wayo-flex-box>
</section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.box{
  margin-bottom: 15px;
}
.cell{
  text-align: center;
  height: 30px;
  line-height: 28px;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 12px;
  &:nth-child(odd){
    color: #333;
    background-color: #ccc;
  }
  &:nth-child(even){
    color: #333;
    background-color: #999;
  }
  &-column{
    width: 33.33%
  }
}
</style>