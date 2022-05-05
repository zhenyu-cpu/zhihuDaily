/**
 * @author zhenyu
 * @description 获取新闻下的评论
 */
import {request} from "../utils/request"
/**
 * 使用新闻的Id来获取，指定文章Id下面的长评论
 * 根据新闻Id来获取，文章下的长评论
 * @param {*} NewsId 文章Id
 */
export function getSpecifiedNewsLongCommentsByNewsId(NewsId){
    return request("/story/"+NewsId+"/long-comments","GET",{});
}
/**
 * 使用新闻的Id来获取，指定文章Id下面的短评论
 * 根据新闻Id来获取，指定文章下面的短评论
 * @param {*} NewsId 新闻Id
 */
export function getSpecifiedNewsShortCommentsByNewsId(NewsId){
    return request("/story/"+NewsId+"/short-comments","GET",{});
}