// get news
export const getNewsByType = (
  type: string,
  controller: AbortController,
  page: number,
  limit: number
) => {
  // 真实请求是需要携带page和limit的 这里mock就不带了
  return new Promise((resolve, reject) => {
    fetch(
      `https://www.fastmock.site/mock/e533620d77487dcd3bced998af782612/toutiao/get_${type}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
