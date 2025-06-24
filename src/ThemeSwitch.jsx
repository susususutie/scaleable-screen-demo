import LineSimple from './line/simple'
import LineStack from './line/stack'
import LineAreaBasic from './line/area-basic'
import useRem from './useRem'

export default function ThemeSwitch() {
  const [size, sizeFn] = useRem()

  const tableStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#009688',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  }
  const paperStyle = {
    margin: 'auto',
    position: 'relative',
    backgroundColor: '#fff',
    width: size.width,
    height: size.height,
  }

  return (
    <div style={tableStyle}>
      {!!size && (
        <div style={paperStyle}>
          <div style={{ width: 600, height: 400 }}>
            <LineSimple />
          </div>
          <div style={{ width: 600, height: 400 }}>
            <LineStack />
          </div>
          <div style={{ width: 600, height: 400 }}>
            <LineAreaBasic />
          </div>
          <div style={{ width: 600, height: 400 }}>{/* <LineSimple /> */}</div>
          <div style={{ width: 600, height: 400 }}>{/* <LineSimple /> */}</div>
        </div>
      )}
    </div>
  )
}
