import LineSimple from './line/simple'
import LineStack from './line/stack'
import LineAreaBasic from './line/area-basic'
import { useContext } from 'react'
import { SizeContext } from './ScalableRoot'

export default function ThemeSwitch() {
  const size = useContext(SizeContext)
  // console.log(size?.rootValue)

  const groupStyle = { display: 'flex', flexWrap: 'wrap', gap: size.calcRem(24), background: 'white' }
  const itemStyle = { width: size.calcRem(624), height: size.calcRem(344) }
  return (
    <div style={groupStyle}>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineStack />
      </div>
      <div style={itemStyle}>
        <LineAreaBasic />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
      <div style={itemStyle}>
        <LineSimple />
      </div>
    </div>
  )
}
