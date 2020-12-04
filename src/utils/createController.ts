// 中止fetch请求
export const createController = () => {
  const controller = new AbortController()
  return {
    controller,
    signal: controller.signal
  }
}