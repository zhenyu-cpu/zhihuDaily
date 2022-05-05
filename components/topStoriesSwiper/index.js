// components/imageSwiper/index.js
Component({
    properties: {
      swiperList: {
        type: Array,
        value: [ // 默认数据（可以从引用组件处的属性传入该属性值）
          "https://pic3.zhimg.com/v2-1a246fcc460f032870c01c18d1f36ab3.jpg?source=8673f162"
        ]
      }
    },
    data: {
      currentIndex: 0  // 初始高亮下标
    },
    methods: {
      /* 这里实现控制自定义轮播指示点高亮 */
      swiperChange(e) {     
        this.setData({
          currentIndex: e.detail.current
        })      
      },
      /*点击事件 */
      onTabNode(event) {
        const id = event.currentTarget.dataset.id;
        wx.navigateTo({
          url: `/pages/newsRead/index?id=${id}`
        })
      }
    }
  })
  
