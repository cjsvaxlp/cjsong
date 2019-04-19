<template>
<div>
  <MHeader>列表页</MHeader>
  <div class="content">
    <ul>
      <li v-for="book in books">
        <img :src="book.bookCover" alt="">
        <div>
          <h4>{{book.bookName}}</h4>
          <p>{{book.bookInfo}}</p>
          <b>{{book.bookPrice}}</b>
          <button @click="remove(book.bookId)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    import MHeader from "../base/MHeader.vue";
    import { getBooks,removeBook} from "../api";
    export default {
        name: "List",
        created(){
          this.getData();
        },
        data(){
            return {msg:'hello',books:[]}
        },
        methods:{
         async getData(){
          this.books = await getBooks()
          },
          async remove(id){
            await removeBook(id)
          }

        },

        components:{MHeader}
    }
</script>

<style scoped>
  .content ul{
    padding:10px;
  }
  .content ul li{
   display:flex;
    padding:10px 0;
    border-bottom:1px solid #f1f1f1;
  }
  .content ul li img{
    width:130px;
    height:150px;
  }
  .content h4{
    font-size:25px;
    line-height:25px;
  }
  .content p{
    color:#2a2a2a;
    font-size:18px;
    line-height:20px;
  }
  .content b{
    color:red;
    font-size:18px;
    line-height:20px;
  }
  .content button{
    display:block;
    background:red;
    color:#fff;
    font-size:15px;
    height:25px;
    line-height:25px;
    border:none;
    border-radius: 10px;
    width:60px;
    outline:none;
  }
</style>
