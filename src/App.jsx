import useRem from './useRem'

function App() {
  const [size, px2rem] = useRem()

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
          <div style={{ width: px2rem(1080 / 2), height: px2rem(1080 / 2), backgroundColor: 'antiquewhite' }}>
            大屏 {size.width} x {size.height} rem: {size.rootFontSize}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
