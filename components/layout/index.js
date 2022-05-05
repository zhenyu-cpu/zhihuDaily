// components/layout/index.js

/**
 * @author zhenyu
 */
Component({
    options: {
      // 允许组件有多个插槽
      multipleSlots: true
    },
    /**
     * 组件的初始数据
     */
    data: {
      // 状态栏高度
      statusBarHeight: 0,
    },
  
    /**
     * 在组件实例进入页面节点树时执行
     */
    attached() {
        const {statusBarHeight} = wx.getSystemInfoSync()
        console.log('系统信息⚙️⚙️⚙️:', statusBarHeight)  // 44(单位为px)
        this.setData({
          statusBarHeight
        })
    }
  })
