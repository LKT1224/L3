// 云函数调用依赖、初始化
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
   //return是为了返回信息给本地控制台（console），以便读取数据库操作是否成功的信息
   return db.collection('picture').add({ //picture为集合（表格）名，可以自定义
      data: {
         text: event.input_text, //input_text为本地JS传过来的data
      }
   })
}