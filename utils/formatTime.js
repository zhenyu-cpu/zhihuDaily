/**
 * 
 * @author zhenyu
 * @description 格式化时间
 */

 /**
  * 格式化事件
  * @param {*} date 时间对象
  */
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  }
  
  /**
   * 
   * @param {*} n 格式化数字
   */
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }
  
  module.exports = {
    formatTime
  }
  