<template>
  <div>
      <MHeader>首页</MHeader>
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
  //1.引入组件 2.注入组件 3.使用组件
    import MHeader from "../base/MHeader.vue";
    import Swiper from "../base/Swiper.vue";
    import {getSliders,getHotBook} from '../api'
    export default {
        name: "Home",
        async created(){
          this.getSlider();//获取轮播图
          this.getHot();//获取热门图书
        },
        components:{
            MHeader,
            Swiper
        },
        data(){
            return {sliders: [],hotBooks:[]}
        },
        methods:{
          async  getSlider(){
            // //给data起别名,对象中的属性名字必须和得到结果的名字一致
            // let {data:sliders} = await getSliders();
            // console.log(sliders);
            // //将获取的数据放到sliders中
            // this.sliders = sliders
            this.sliders = await getSliders();//改用拦截器后，少了一层{}
          },
          async  getHot(){
            // let {data} = await getHotBook();
            this.hotBooks = await getHotBook();//改用拦截器后，少了一层{}
          }

        }

    }
</script>

<style scoped lang="less">
  .container{
    width:90%;
    margin:0 auto;
    ul {
      display:flex;
      flex-wrap:wrap;/*默认不换行*/
      li{
        width:50%;
        text-align:center;
        margin:5px 0;
        img{
          width:100%;
        }
    }
    }
  }
h3{
color:#999;padding:5px 0;
}
</style>
