export const SideBarList = [{
  label: '介绍',
  activated: true,
  route: '/'
},{
  label: '开发指南',
  sublist: [{
    label: '安装',
    activated: true,
    route: '/guide/install'
  },{
    label: '快速上手',
    activated: true,
    route: '/guide/tutorial'
  },{
    label: '开发规范',
    sublist: [{
      label: '色彩',
      activated: true,
      route: '/guide/colors'
    },{
      label: '字体',
      activated: true,
      route: '/guide/fonts'
    }]
  }]
},{
  label: '组件',
  sublist: [{
    label: '基础组件',
    sublist: [{
      label: 'Block 区域',
      activated: true,
      route: '/components/block'
    },{
      label: 'Separator 1像素分割线',
      activated: true,
      route: '/components/separator'
    },{
      label: 'Lath 横幅',
      activated: true,
      route: '/components/lath'
    },{
      label: 'Flex 弹性布局',
      activated: true,
      route: '/components/flex'
    },{
      label: 'Icon 图标',
      activated: true,
      route: '/components/icon'
    },{
      label: 'Button 按钮',
      activated: true,
      route: '/components/button'
    },{
      label: 'Stripe 条纹按钮',
      activated: true,
      route: '/components/stripe'
    },{
      label: 'Tag 标签',
      activated: true,
      route: '/components/tag'
    },{
      label: 'Image 图片',
      activated: true,
      route: '/components/image'
    },{
      label: 'Rate 评分',
      activated: true,
      route: '/components/rate'
    },{
      label: 'Tabs 标签页',
      activated: true,
      route: '/components/tabs'
    },{
      label: 'Slides 幻灯片',
      activated: true,
      route: '/components/slides'
    }]
  },{
    label: '业务组件',
    sublist: [{
      label: 'Showcase 展柜',
      activated: true,
      route: '/components/showcase'
    },{
      label: 'Toast 轻提示',
      activated: true,
      route: '/components/toast'
    },{
      label: 'ImageViewer 图片浏览',
      activated: true,
      route: '/components/imageviewer'
    }]
  }]
// },{
//   label: '更新日志',
//   activated: true,
//   route: '/changelog'
},];