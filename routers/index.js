const express = require('express');
const client = require('../config/client');
const fs = require('fs');
const path  =require('path');

const router = express.Router();



/**
 * 创建bucket
 */
router.get('/createBucket',async (req,res)=>{
   try {
    let result = await client.putBucket('cc2019');
    console.log(result);
    res.send(result);
   } catch (error) {
       console.log(error);
       res.send('bucket名已存在');
   }
    
});
/**
 * 列举所有bucket
 */
router.get('/listBuckets',async (req,res)=>{
    try {
        let result = await client.listBuckets();
        res.render('index');
    } catch (error) {
        console.log(error);
    }
});
/**
 * 删除bucket
 */
router.get('/deleteBucket',async (req,res)=>{
   try {
    let result = await client.deleteBucket('yourbucketname');
    console.log(result);
   } catch (error) {
       console.log(error);
   }
});

/**
 * 列举指定bucket下的文件夹和文件
 */
router.get('/list',async (req,res)=>{
    try {
        client.useBucket('test2019-10-19');
        let result = await client.list();
        console.log(result);
        res.send(result);
        
    } catch (error) {
        console.log(error);
    }
});




module.exports = router;