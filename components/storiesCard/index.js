// components/storiesCard/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item:{
            type:Object
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
      /*点击事件 */
      onTabNode(event) {
        const id = event.currentTarget.dataset.id;
        wx.navigateTo({
          url: `/pages/newsRead/index?id=${id}`
        })
      }
    }
})
