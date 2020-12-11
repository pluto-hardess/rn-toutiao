// get detail api

// 目前每个详情页的数据返回都一样 但是该写的东西要写全 后续会改接口的返回数据(头条的接口返回的东西属实有点多...)
export const getDetailPage = (id: string) => {
  return new Promise((resolve, reject) => {
    fetch(``)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}