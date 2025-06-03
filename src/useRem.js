import { useState } from 'react'
import { useSize, useDebounceEffect } from 'ahooks'
import { useCallback } from 'react'

// 1920spx => SWIDTH / RPX => xxrem === width
const SWIDTH = 1920 // 设计稿宽度
const RPX = 16 // 设计稿的px转换成rem需要除以多少

export function px2rem(px) {
  return px / RPX + 'rem'
}

export function maxPx2rem(px) {
  return `max(${px2rem(px)}, ${px}px)`
}

const computeSize = size => {
  if (!size || !size.width || !size.height) {
    return undefined
  }
  // 目标宽高比
  const wPh = 1920 / 1080
  let width = 0
  let height = 0
  if (size && size.width && size.height) {
    const wrapperWPH = size.width / size.height
    // 1. 外层宽高比更大, 外层更宽, 以高度为基准, 左右留白
    if (wrapperWPH > wPh) {
      height = size.height
      width = height * wPh
    }
    // 2. 外层宽高比更小, 外层更高, 以宽度为基准, 上下留白
    else if (wrapperWPH < wPh) {
      width = size.width
      height = width / wPh
    }
    // 3. 宽高比相同, 以外层尺寸显示
    else {
      width = size.width
      height = size.height
    }
  }

  return { width, height, rootFontSize: width / (SWIDTH / RPX) }
}

/**
 * @typedef {{ width: number; height: number; rootFontSize: number} } Size
 * 仅使用一次, 避免冲突
 *
 * @returns {[Size, {px2rem: (px: number) => string, calcWidth: (percent: number) => number, calcHeight: (percent: number) => number}]}
 * @description 使用 rem 布局, 计算根元素的 font-size, 以及根据百分比计算宽高
 */
function useRem() {
  const bodySize = useSize(document.querySelector('body'))
  const [size, setSize] = useState(() => computeSize(bodySize))
  useDebounceEffect(
    () => {
      const newSize = computeSize(bodySize)
      if (newSize?.rootFontSize) {
        document.documentElement.style.fontSize = newSize.rootFontSize + 'px'
      }
      setSize(newSize)
    },
    [bodySize],
    {
      wait: 500,
    }
  )
  const calcWidth = useCallback(
    percent => {
      if (typeof percent !== 'number' || percent < 0 || percent > 100) {
        return 0
      }
      return size.width * (percent / 100)
    },
    [size.width]
  )
  const calcHeight = useCallback(
    percent => {
      if (typeof percent !== 'number' || percent < 0 || percent > 100) {
        return 0
      }
      return size.height * (percent / 100)
    },
    [size.height]
  )

  return [size, { px2rem, calcWidth, calcHeight }]
}

export default useRem
