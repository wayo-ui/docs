<template>
<div class="components-demo">
  <div class="components-demo__content">
    <demo-button v-if="name==='button'"></demo-button>
    <demo-icon v-if="name==='icon'"></demo-icon>
    <demo-separator v-if="name==='separator'"></demo-separator>
    <demo-stripe v-if="name==='stripe'"></demo-stripe>
    <demo-rate v-if="name==='rate'"></demo-rate>
    <demo-flex v-if="name==='flex'"></demo-flex>
  </div>
</div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    DemoButton: () => import(/* webpackChunkName: "demo-button" */ './demos/button.vue'),
    DemoIcon: () => import(/* webpackChunkName: "demo-icon" */ './demos/icon.vue'),
    DemoSeparator: () => import(/* webpackChunkName: "demo-separator" */ './demos/separator.vue'),
    DemoStripe: () => import(/* webpackChunkName: "demo-stripe" */ './demos/stripe.vue'),
    DemoRate: () => import(/* webpackChunkName: "demo-rate" */ './demos/rate.vue'),
    DemoFlex: () => import(/* webpackChunkName: "demo-flex" */ './demos/flex.vue')
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.components-demo{
  position: fixed;
  top: 100px;
  right: 20px;
  width: 368px;
  height: 745px;
  overflow: hidden;
  background: url('../../assets/iphone.png') no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: $screen-width-hidedemo){
    display: none;
  }
  &__content{
    width: 320px;
    height: 568px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: auto;
    @include transform(translate(-50%,-50%));
  }
  .demo-box{
    padding: 5px 10px;
    &.fill{
      padding: 5px 0;
    }
    .title{
      font-size: 14px;
      margin: 10px 0;
    }
    .subtitle{
      color: #5f5f5f;
      padding-left: 5px;
      font-size: 13px;
      margin-top: -5px;
      margin-bottom: 10px;
    }
    .item{
      margin-bottom: 10px;
      display: inline-block;
      vertical-align: bottom;
      &.fit{
        display: block;
      }
    }
  }
}
</style>