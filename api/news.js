/**
 * @author zhenyu
 * @description 获取最新新闻和获取指定的新闻内容以及获取新闻的额外信息，例如评论数，点赞数量等
 */
import {
    request
} from '../utils/request'

/**
 * 获取最新的消息列表
 * 参数: 没有参数
 * 请求方式: GET请求
 * 返回示例: 
 * 
 */
export function getLatestNews() {
    return request("/news/latest", "GET", {});
}
/**
 * 根据新闻Id查询新闻的内容
 * 参数:
 * @param {*} NewsId 新闻的id 
 * 请求方式:GET请求
 * 返回示例
 */
export function getNewsContentByNewsId(NewsId) {
    return request("/news/" + NewsId, "GET", {});
}
/**
 * 根据传入的时间获取当天的新闻列表
 * 参数：
 * @param {*} beforeDate 以前的时间（也就是需要查询的时间）
 * beforeDate格式：
 * 例如20131119，也就是2013年11月19日
 * 注意：
 * 1. 知乎日报的生日为 2013 年 5 月 19 日，若 before 后数字小于 20130520 ，只会接收到空消息
 * 2. 输入的今日之后的日期仍然获得今日内容，但是格式不同于最新消息的 JSON 格式
 */
export function getBeforeNewsByDate(beforeDate) {
    return request("/news/before/" + beforeDate, "GET", {});
}
/**
 * 根据传入的新闻Id获取他的额外信息，例如
 * 评论数量，所获的『赞』的数量。
 * @param {*} NewsId 新闻的Id
 * 分析：
 * long_comments : 长评论总数
 * popularity : 点赞总数
 * short_comments : 短评论总数
 * comments : 评论总数 
 */
export function getNewsExtraInfo(NewsId) {
    return request("/story-extra/"+NewsId,"GET",{});
}