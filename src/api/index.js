import axios from 'axios';

axios.defaults.baseURL='http://127.0.0.1:3000';
//增加默认的请求路径

axios.interceptors.response.use((res)=>{
  return res.data;//在这里同意拦截结果 把结果处理成res.data
});
//获取轮播图数据,返回的是一个promise对象
export let getSliders = () =>{
  return axios.get('/sliders');
};

//获取热门图书接口
export let getHotBook = () =>{
  return axios.get('./hot')
} ;

