// index.js
import {getLatestNews} from "../../api/news"
Page({
    data:{
        topStoriesList:[],
        storiesList:[],
    },
    onLoad: function getLatestNewsList(){
        getLatestNews().then(res=>{
            this.setData({
                topStoriesList: res.data.top_stories,
                storiesList: res.data.stories
              });
              console.log(this.data.storiesList)
        });
    }
})
