import { useState } from 'react';
import { useSize, useDebounceEffect } from 'ahooks';

// 1920spx => SWIDTH / RPX => xxrem === width
const SWIDTH = 1920; // 设计稿宽度
const RPX = 16; // 设计稿的px转换成rem需要除以多少

export function px2rem(px) {
  return px / RPX + 'rem';
}

export function maxPx2rem(px) {
  return `max(${px2rem(px)}, ${px}px)`;
}

const computeSize = (size) => {
  if (!size || !size.width || !size.height) {
    return undefined;
  }
  // 目标宽高比
  const wPh = 1920 / 1080;
  let width = 0;
  let height = 0;
  if (size && size.width && size.height) {
    const wrapperWPH = size.width / size.height;
    // 1. 外层宽高比更大, 外层更宽, 以高度为基准, 左右留白
    if (wrapperWPH > wPh) {
      height = size.height;
      width = height * wPh;
    }
    // 2. 外层宽高比更小, 外层更高, 以宽度为基准, 上下留白
    else if (wrapperWPH < wPh) {
      width = size.width;
      height = width / wPh;
    }
    // 3. 宽高比相同, 以外层尺寸显示
    else {
      width = size.width;
      height = size.height;
    }
  }

  return { width, height, rootFontSize: width / (SWIDTH / RPX) };
};


/**
 * @typedef {{ width: number; height: number; rootFontSize: number} } Size
 * 仅使用一次, 避免冲突
 * 
 * @returns {[Size, px2rem]}
 */
function useRem()  {
  const bodySize = useSize(document.querySelector('body'));
  const [size, setSize] = useState();
  useDebounceEffect(
    () => {
      const newSize = computeSize(bodySize);
      if (newSize?.rootFontSize) {
        document.documentElement.style.fontSize = newSize.rootFontSize + 'px';
      }
      setSize(newSize);
    },
    [bodySize],
    {
      wait: 500,
    }
  );

  return [size, px2rem];
}

export default useRem;
