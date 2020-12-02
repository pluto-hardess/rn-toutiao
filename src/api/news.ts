// get news
export const getNewsByType = (type: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.fastmock.site/mock/e533620d77487dcd3bced998af782612/toutiao/get_${type}`)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}