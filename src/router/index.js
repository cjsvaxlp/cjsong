import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
import List from '../components/List.vue';

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/collect',component:Collect},
    {path:'/detail',component:Detail},
    {path:'/add',component:Add},
    {path:'/list',component:List},
    {path:'*',redirect:'/home'},
  ]
})
