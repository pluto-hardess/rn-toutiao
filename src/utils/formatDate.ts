/**
 * 获取格式化时间差值
 * @param time
 */
export const getFormatTime = (time: string) => {
  // 改变日期格式
  const formatDate = time.replace(/-/g, '/')
  const timeStamp = new Date(formatDate).getTime()
  const nowStamp = new Date().getTime()
  const second = (nowStamp - timeStamp) / 1000
  if (second > 0 && second < 60) {
    return `${Math.floor(second)}秒前`
  } else if (second >= 60 && second < 60 * 60) {
    return `${Math.floor(second / 60)}分钟前`
  } else if (second >= 60 * 60 && second < 60 * 60 * 24) {
    return `${Math.floor(second / (60 * 60))}小时前`
  } else {
    return `${Math.floor(second / (60 * 60 * 24))}天前`
  }
}