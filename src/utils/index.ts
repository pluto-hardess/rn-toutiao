// 屏幕适配 单位转换  https://blog.csdn.net/kakaxiqianxin/article/details/80666731
import { Dimensions, PixelRatio } from "react-native";
// 屏幕宽度dp
const screenWidth = Dimensions.get("window").width;
// 屏幕高度dp
const screenHeight = Dimensions.get("window").height;
// 字体缩放比
const fontScale = PixelRatio.getFontScale();
// 设备像素密度
const Pixel = PixelRatio.get();
// 设计稿宽度
const designWidth = 750;
// 设计稿高度
const designHeight = 1334;
// 根据屏幕dp获取对应的像素值
const screenPxWidth = PixelRatio.getPixelSizeForLayoutSize(designWidth);
const screenPxHeight = PixelRatio.getPixelSizeForLayoutSize(designHeight);

/**
 * 设置text
 */
export function setSpText(size: number) {
  const scale = Math.min(
    screenWidth / designWidth,
    screenHeight / designHeight
  );
  const calcSize = Math.round((size * scale) / fontScale + 0.5);
  return calcSize;
}

/**
 * 设置高度
 */
export function scaleSizeH(size: number) {
  const scaleHeight = (size * screenPxHeight) / designHeight;
  const calcSize = Math.round(scaleHeight / Pixel + 0.5);
  return calcSize;
}

/**
 * 设置宽度
 */
export function scaleSizeW(size: number) {
  const scaleWidth = (size * screenPxWidth) / designWidth;
  const calcSize = Math.round(scaleWidth / Pixel + 0.5);
  return calcSize;
}
