import useRem, { px2rem } from './useRem'
import GeoDemo from './GeoDemo'

function App() {
  const [size] = useRem()

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
          {/* <div style={{ width: sizeFn.calcWidth(50), height: sizeFn.calcHeight(50), backgroundColor: 'antiquewhite' }}>
            大屏 {size.width} x {size.height} rem: {size.rootFontSize}
          </div> */}
          <div style={{ width: px2rem(1920 / 2), height: px2rem(1080 / 2), top: '25%', left: '25%' }}>
            <GeoDemo />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
