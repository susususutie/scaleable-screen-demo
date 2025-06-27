import { useMemo, useState } from 'react'
import { useCallback } from 'react'
import SizeContext from './SizeContext'
import { useEffect } from 'react'
import debounce from 'lodash.debounce'

export default function ScalableRoot(props) {
  const { rootValue = 16, precision = 5, rootWidth = 1920, rootHeight = 1080, wait = 300, children } = props

  const [rootSize, setRootSize] = useState(null)
  useEffect(() => {
    const computeSize = size => {
      if (!size || !size.width || !size.height) {
        return { width: 0, height: 0, rootFontSize: Math.round(rootValue * 10 ** precision) / 10 ** precision }
      }
      // 目标宽高比
      const aspectRatio = rootWidth / rootHeight
      let width = 0
      let height = 0
      if (size && size.width && size.height) {
        const wrapperWPH = size.width / size.height
        // 1. 外层宽高比更大, 外层更宽, 以高度为基准, 左右留白
        if (wrapperWPH > aspectRatio) {
          height = size.height
          width = Math.round(height * aspectRatio * 10 ** precision) / 10 ** precision
        }
        // 2. 外层宽高比更小, 外层更高, 以宽度为基准, 上下留白
        else if (wrapperWPH < aspectRatio) {
          width = size.width
          height = Math.round((width / aspectRatio) * 10 ** precision) / 10 ** precision
        }
        // 3. 宽高比相同, 以外层尺寸显示
        else {
          width = size.width
          height = size.height
        }
      }

      return {
        width,
        height,
        rootFontSize: Math.round((width / (rootWidth / rootValue)) * 10 ** precision) / 10 ** precision,
      }
    }
    const { clientWidth, clientHeight } = document.body
    console.log('first calculate', clientWidth, clientHeight)
    const size = computeSize({ width: clientWidth, height: clientHeight })
    setRootSize(size)

    const onResize = debounce(
      () => {
        const { clientWidth, clientHeight } = document.body
        console.log('onResize', clientWidth, clientHeight)
        const size = computeSize({ width: clientWidth, height: clientHeight })
        setRootSize(size)
      },
      wait
      // { leading: false, trailing: true }
    )
    window.addEventListener('resize', onResize, true)

    return () => {
      window.removeEventListener('resize', onResize, true)
    }
  }, [rootValue, precision, rootWidth, rootHeight, wait])

  const calcWidth = useCallback(
    percent => {
      if (typeof rootSize?.width !== 'number' || typeof percent !== 'number' || percent < 0 || percent > 100) {
        return 0
      }
      return Math.round(rootSize.width * (percent / 100) * 10 ** precision) / 10 ** precision
    },
    [rootSize?.width, precision]
  )
  const calcHeight = useCallback(
    percent => {
      if (typeof rootSize?.height !== 'number' || typeof percent !== 'number' || percent < 0 || percent > 100) {
        return 0
      }
      return Math.round(rootSize.height * (percent / 100) * 10 ** precision) / 10 ** precision
    },
    [rootSize?.height, precision]
  )
  const calcPx = useCallback(
    px => {
      if (typeof rootSize?.rootFontSize !== 'number' || typeof px !== 'number') {
        return px
      }
      return Math.round(((px * rootSize.rootFontSize) / rootValue) * 10 ** precision) / 10 ** precision
    },
    [rootSize?.rootFontSize, rootValue, precision]
  )
  const calcRem = useCallback(
    px => {
      if (typeof px !== 'number') {
        return px
      }
      return Math.round((px / rootValue) * 10 ** precision) / 10 ** precision + 'rem'
    },
    [rootValue, precision]
  )

  const sizeContextValue = useMemo(
    () => ({
      rootWidth: rootSize?.width,
      rootHeight: rootSize?.height,
      rootValue: rootSize?.rootFontSize,
      calcWidth,
      calcHeight,
      calcPx,
      calcRem,
    }),
    [rootSize?.width, rootSize?.height, rootSize?.rootFontSize, calcWidth, calcHeight, calcPx, calcRem]
  )

  useEffect(() => {
    const fontSize = rootSize?.rootFontSize ?? rootValue
    document.documentElement.style.fontSize = fontSize + 'px'
  }, [rootValue, rootSize?.rootFontSize])

  // console.log('render', rootSize?.width, rootSize?.height, rootSize?.rootFontSize)

  return (
    <SizeContext.Provider value={sizeContextValue}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
        }}
      >
        <div
          style={{ width: rootSize?.width, height: rootSize?.height, position: 'relative', backgroundColor: '#fff' }}
        >
          {rootSize ? children : null}
        </div>
      </div>
    </SizeContext.Provider>
  )
}
