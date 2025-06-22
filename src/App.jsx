import useRem, { px2rem } from './useRem'
import GeoDemo from './GeoDemo'

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
            backgroundColor: '#100c2a',
            width: size.width,
            height: size.height,
          }}
        >
          {/* 大屏
          <div
            style={{
              fontSize: sizeFn.calcPx(16),
              width: sizeFn.calcWidth(50),
              height: sizeFn.calcHeight(50),
              backgroundColor: 'antiquewhite',
            }}
          >
            大屏 {size.width} x {size.height} rem: {size.rootFontSize}
          </div> */}
          <div
            style={{
              width: sizeFn.calcWidth(60),
              height: sizeFn.calcHeight(80),
              position: 'absolute',
              left: sizeFn.calcWidth(20),
              top: sizeFn.calcHeight(10),
            }}
          >
            <GeoDemo />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
