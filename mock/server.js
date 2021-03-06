let http = require ('http');
let fs = require('fs');
let url = require('url');

// 获取轮播图 / sliders
let sliders = require('./sliders');

function read(cb){
  fs.readFile('./book.json','utf8',function(err,data){
    if(err||data.length == 0){//如果有错误 或者文件没长度 就是空数组
      cb([])
    }else{
      cb(JSON.parse(data)); // 将读出来的内容转化成对象
    }
  })
}
// read(function(books){//books代表所有图书
//   console.log(books);
// });
http.createServer((req,res)=>{
  //解决跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');

  if(req.method=="OPTIONS") return res.end(200);/*让options请求快速返回*/
    let {pathname,query} = url.parse(req.url,true);//true把query转化成对象
    if(pathname ==='/sliders'){
      res.setHeader('Content-type','application/json;charset=utf8');
      return res.end(JSON.stringify(sliders));
    }
    if(pathname ==='/hot'){
      res.setHeader('Content-type','application/json;charset=utf8');
      read(function(books){
        let hot =books.reverse().slice(0,4);
        res.end(JSON.stringify(hot));
      });
      return
      // return res.end(JSON.stringify(sliders));
    }
    if(pathname === '/book'){
      res.setHeader('Content-type','application/json;charset=utf8');
      console.log(query.id);
      let id= parseInt(query.id);//取出的是字符串
      console.log(id);
      switch (req.method){// ?id=1
        case 'GET':
          if(id){//查询一个

          }else{
            read(function(books){//获取所有图书
              res.end(JSON.stringify(books.reverse()));
            })
          }
        break;
        case 'POST':
        break;
        case 'PUT':
        break;
        case 'DELETE':
          console.log(id);
        break;
      }
      return
    }

}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/book');
