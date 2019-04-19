<template>
<div>
  <MHeader>收藏页</MHeader>
  <ul class="box">
    <li v-for="(item, index) in bgData" :key="index" @click="effect(index,$event)" :ref="index">
      <img :src="item.src" alt="">
    </li>
  </ul>
</div>
</template>

<script>
import MHeader from "../base/MHeader.vue";
export default {
    name: "Collect",
    components:{
      MHeader
    },
    data(){
      return{
        bgData: [
          {
            count: 0,
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg'
          },
          {
            count: 0,
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967239004,1951414302&fm=27&gp=0.jpg'
          },
          {
            count: 0,
            src: 'https://ss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=265726718,565835175&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=2d4787b9fe0effed9e861188b7493297'
          },
          {
            count: 0,
            src: 'https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3660968530,985748925&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=5e64af964be378c6c2a3b0acc65dfe24'
          },
          {
            count: 0,
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1185015449,3819585986&fm=27&gp=0.jpg'
          },
          {
            count: 0,
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=684839351,3665415396&fm=27&gp=0.jpg'
          }
        ],
        a: 0
      }
    },
    methods: {
        effect(index,el){
          this.bgData[index].count +=1;
          // console.log(180*this.bgData[index].count);
          el.target.style.cssText = `transform-style: preserve-3d;transform: rotateY(180deg);transition: transform .6s;`;
          // this.bgData[index].count = this.bgData[index].count===2?0: this.bgData[index].count
        }
    }
}
</script>

<style scoped lang="less">
  .box{
    display: flex;
    margin: 60px 20px 20px;
    flex-wrap: wrap;
    justify-content: center;
    li{
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      width: 45%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: #64cc48;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      /*transform: rotateY(180deg);*/
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        /*backface-visibility: hidden;*/
      }
    }
    /*li:hover{*/
    /*  transform-style: preserve-3d;*/
    /*  transform: rotateY(180deg);*/
    /*  transition: transform .6s;*/
    /*}*/
  }

</style>
