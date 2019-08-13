// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  if(event.type === 'praise'){
   return await db.collection('counters').doc(event.data._id).update({
      data: {
        praise: event.data.praise+1,
      }
    }).then(res=>{
      return res
    })
  } else if (event.type === 'peak'){
    return await db.collection('counters').doc(event.data._id).update({
      data: {
        peak: event.data.peak + 1,
      }
    }).then(res => {
      return res
    })
  } else if (event.type === 'discuss'){
    return await db.collection('discuss_table').get({ discuss_id: event.data._id }).then(res => {
      return res
    })
  }else{
    return {
      msg:'err',
      data:{
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
      }
    }
  }
}