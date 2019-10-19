let OSS = require("ali-oss");
module.exports = new OSS({
  region: "oss-cn-shenzhen",
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: "LTAI4FtF56B6FkesHdHsvLUx",
  accessKeySecret: "QCEHhEDUvLAQuMBHZDmS8xZ1s386Yy",
  // bucket: "test2019-10-19"
});
