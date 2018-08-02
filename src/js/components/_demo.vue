<template>
<div class="components-demo" v-show="show">
  <div class="components-demo__content">
    <demo-button v-if="name==='button'"></demo-button>
    <demo-icon v-if="name==='icon'"></demo-icon>
    <demo-separator v-if="name==='separator'"></demo-separator>
    <demo-stripe v-if="name==='stripe'"></demo-stripe>
    <demo-rate v-if="name==='rate'"></demo-rate>
    <demo-flex v-if="name==='flex'"></demo-flex>
    <demo-block v-if="name==='block'"></demo-block>
    <demo-lath v-if="name==='lath'"></demo-lath>
    <demo-tabs v-if="name==='tabs'"></demo-tabs>
    <demo-slides v-if="name==='slides'"></demo-slides>
    <demo-tag v-if="name==='tag'"></demo-tag>
    <demo-image v-if="name==='image'"></demo-image>
    <!--<demo-imageviewer v-if="name==='imageviewer'"></demo-imageviewer>-->
    <demo-showcase v-if="name==='showcase'"></demo-showcase>
    <demo-toast v-if="name==='toast'"></demo-toast>
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
  computed: {
    show(){
      return this.name !== 'imageviewer';
    }
  },
  components: {
    DemoButton: () => import(/* webpackChunkName: "demo-button" */ './demos/button.vue'),
    DemoIcon: () => import(/* webpackChunkName: "demo-icon" */ './demos/icon.vue'),
    DemoSeparator: () => import(/* webpackChunkName: "demo-separator" */ './demos/separator.vue'),
    DemoStripe: () => import(/* webpackChunkName: "demo-stripe" */ './demos/stripe.vue'),
    DemoRate: () => import(/* webpackChunkName: "demo-rate" */ './demos/rate.vue'),
    DemoFlex: () => import(/* webpackChunkName: "demo-flex" */ './demos/flex.vue'),
    DemoBlock: () => import(/* webpackChunkName: "demo-block" */ './demos/block.vue'),
    DemoLath: () => import(/* webpackChunkName: "demo-lath" */ './demos/lath.vue'),
    DemoTabs: () => import(/* webpackChunkName: "demo-tabs" */ './demos/tabs.vue'),
    DemoSlides: () => import(/* webpackChunkName: "demo-slides" */ './demos/slides.vue'),
    DemoTag: () => import(/* webpackChunkName: "demo-tag" */ './demos/tag.vue'),
    DemoImage: () => import(/* webpackChunkName: "demo-image" */ './demos/image.vue'),
    // DemoImageviewer: () => import(/* webpackChunkName: "demo-imageviewer" */ './demos/imageviewer.vue'),
    DemoShowcase: () => import(/* webpackChunkName: "demo-showcase" */ './demos/showcase.vue'),
    DemoToast: () => import(/* webpackChunkName: "demo-toast" */ './demos/toast.vue')
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