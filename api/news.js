/**
 * @author zhenyu
 */
import {
    request
} from '../utils/request'

/**
 * 获取最新的消息
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