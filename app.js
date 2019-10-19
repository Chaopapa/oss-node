const client = require('./config/client');
const express = require('express');
const routes  =require('./routers');
const path  =require('path');
const ejs  = require('ejs');

const app = express();

//配置模板引擎
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','html');
app.engine('html',ejs.renderFile);

app.get('/',async (req,res)=>{
    let result = await client.listBuckets();
    console.log(result);
    res.render('index',{
        buckets: result.buckets,
        addDesc: '新建Bucket'
    });
});

//配置静态资源
app.use('/static',express.static(path.join(__dirname,'./static')));

app.use('/api',routes);

app.listen('9000',err=>{
    if(err){

    }else{
        console.log("OSS文件存储项目已启动");
    }
});

