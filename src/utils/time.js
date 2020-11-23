
//时间戳转换成日期时间
export function formatTime (unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  var second = dateTime.getSeconds()
  var now = new Date()
  var now_new = Date.parse(now.toDateString())  //typescript转换写法
  var milliseconds = now_new - dateTime
  var timeSpanStr = year + '/' + add0(month) + '/' + add0(day) + ''//+ ' ' + hour + ':' + minute
  return timeSpanStr
}
//时间戳转换成日期时间
export function formatTimeSmall (unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  var second = dateTime.getSeconds()
  var now = new Date()
  var now_new = Date.parse(now.toDateString())  //typescript转换写法
  var milliseconds = now_new - dateTime
  var timeSpanStr = year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(hour) + ':' + add0(minute) + ':' + add0(second)//+ ' ' + hour + ':' + minute
  return timeSpanStr
}
function add0 (m) { return m < 10 ? '0' + m : m }