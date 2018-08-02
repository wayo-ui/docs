<template>
  <div class="demo">
    <div class="demo-header" v-show="name!=='index'">
      <div class="demo-header__icon"
        @click="name='index'">
        <wayo-icon name="arrow-left" />
      </div>
      <span>{{name}}组件</span>
    </div>
    <div class="demo-index" v-if="name==='index'">
      <section class="info">
        <div class="title">
          Wayo
        </div>
        <p class="subtitle">轻量的移动端Vue组件库</p>
      </section>
      <ul class="content">
        <li class="list list_base"
          :class="{'expand': expandedList.indexOf('base')!==-1}">
          <p class="title" @click="toggleExpand('base')">基础组件</p>
          <nav class="panel">
            <ul class="sublist">
              <li class="subitem" @click="name='block'">Block-区域</li>
              <li class="subitem" @click="name='lath'">Lath-满宽横条</li>
              <li class="subitem" @click="name='separator'">Separator-1像素直线</li>
              <li class="subitem" @click="name='flex'">Flex-弹性容器</li>
              <li class="subitem" @click="name='button'">Button-按钮</li>
              <li class="subitem" @click="name='icon'">Icons-矢量图标</li>
              <li class="subitem" @click="name='stripe'">Stripe-条纹按钮</li>
              <li class="subitem" @click="name='image'">Image-图片</li>
              <li class="subitem" @click="name='tag'">Tag-标签</li>
              <li class="subitem" @click="name='rate'">Rate-评分</li>
              <li class="subitem" @click="name='tabs'">Tabs-标签页</li>
              <li class="subitem" @click="name='slides'">Slides-幻灯片</li>
            </ul>
          </nav>
        </li>
        <li class="list list_busi"
          :class="{'expand': expandedList.indexOf('busi')!==-1}">
          <p class="title" @click="toggleExpand('busi')">业务组件</p>
          <nav class="panel">
            <ul class="sublist">
              <li class="subitem" @click="name='toast'">Toast-短提示</li>
              <li class="subitem" @click="name='showcase'">Showcase-橱窗</li>
              <li class="subitem" @click="name='imageviewer'">Imageviewer-图片浏览</li>
            </ul>
          </nav>
        </li>
      </ul>
    </div>

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
    <demo-imageviewer v-if="name==='imageviewer'"></demo-imageviewer>
    <demo-showcase v-if="name==='showcase'"></demo-showcase>
    <demo-toast v-if="name==='toast'"></demo-toast>
  </div>
</template>

<script>

export default {
  data(){
    return {
      name: 'index',
      expandedList: []
    };
  },
  methods: {
    toggleExpand(name){
      if(this.expandedList.indexOf(name)===-1){
        this.expandedList.push(name);
      }else{
        this.expandedList = this.expandedList.filter(i => i!==name);
      }
    }
  },
  components: {
    DemoButton: () => import(/* webpackChunkName: "demo-button" */ '../components/demos/button.vue'),
    DemoIcon: () => import(/* webpackChunkName: "demo-icon" */ '../components/demos/icon.vue'),
    DemoSeparator: () => import(/* webpackChunkName: "demo-separator" */ '../components/demos/separator.vue'),
    DemoStripe: () => import(/* webpackChunkName: "demo-stripe" */ '../components/demos/stripe.vue'),
    DemoRate: () => import(/* webpackChunkName: "demo-rate" */ '../components/demos/rate.vue'),
    DemoFlex: () => import(/* webpackChunkName: "demo-flex" */ '../components/demos/flex.vue'),
    DemoBlock: () => import(/* webpackChunkName: "demo-block" */ '../components/demos/block.vue'),
    DemoLath: () => import(/* webpackChunkName: "demo-lath" */ '../components/demos/lath.vue'),
    DemoTabs: () => import(/* webpackChunkName: "demo-tabs" */ '../components/demos/tabs.vue'),
    DemoSlides: () => import(/* webpackChunkName: "demo-slides" */ '../components/demos/slides.vue'),
    DemoTag: () => import(/* webpackChunkName: "demo-tag" */ '../components/demos/tag.vue'),
    DemoImage: () => import(/* webpackChunkName: "demo-image" */ '../components/demos/image.vue'),
    DemoImageviewer: () => import(/* webpackChunkName: "demo-imageviewer" */ '../components/demos/imageviewer.vue'),
    DemoShowcase: () => import(/* webpackChunkName: "demo-showcase" */ '../components/demos/showcase.vue'),
    DemoToast: () => import(/* webpackChunkName: "demo-toast" */ '../components/demos/toast.vue')
  }
};
</script>

<style lang="scss">
@import '~@/styles/demo.scss';
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
.demo-header{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  position: relative;
  border-bottom: solid 1px #ccc;
  &__icon{
    font-size: 24px;
    color: #5f5f5f;
    position: absolute;
    left: 10px;
    top: 50%;
    @include transform(translateY(-50%));
  }
}
.demo-index{
  .info{
    text-align: center;
    margin: 40px 0;
    .title{
      font-size: 30px;
      font-weight: bold;
      color: #333;
    }
    .subtitle{
      font-size: 14px;
      margin-top: 15px;
      color: #504e4e;
      letter-spacing: 1px;
    }
  }
  .content{
    padding: 0 20px;
  }
  .list{
    border: solid 1px #999;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 15px;
    -webkit-box-shadow: 1px -1px 5px #999;
    box-shadow: 1px -1px 5px #999;
    &.expand{
      .panel{
        height: auto !important;
      }
    }
    .panel{
      height:0;
      overflow: hidden;
    }
    .title{
      font-size: 15px;
      height: 45px;
      line-height: 45px;
    }
    .subitem{
      font-size: 15px;
      height: 35px;
      line-height: 35px;
      border-top: solid 1px #999;
      padding: 0 10px;
      box-sizing: border-box;
      a,a:visited{
        color: #333;
        text-decoration: none;
      }
    }
  }
}
</style>