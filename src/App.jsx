import useRem, { px2rem } from './useRem'

function App() {
  const [size, sizeFn] = useRem()

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#01061b',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!!size && (
        <div
          style={{
            margin: 'auto',
            // width: 1920,
            // height: 1080,
            backgroundColor: '#fff',
            width: size.width,
            height: size.height,
          }}
        >
          <div style={{ width: sizeFn.calcWidth(50), height: sizeFn.calcHeight(50), backgroundColor: 'antiquewhite' }}>
            大屏 {size.width} x {size.height} rem: {size.rootFontSize}
          </div>
          <div style={{ width: sizeFn.px2rem(1920 / 2), height: px2rem(1080 / 2), backgroundColor: 'aquamarine' }}>
            宽高各为1/2
          </div>
        </div>
      )}
    </div>
  )
}

export default App
