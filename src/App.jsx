import LineSimple from './line/simple'
import LineStack from './line/stack'
import LineAreaBasic from './line/area-basic'
import { useContext } from 'react'
import { ScaleContext } from 'react-responsive-scale'

export default function App() {
  const { calcRem } = useContext(ScaleContext)

  const groupStyle = { display: 'flex', flexWrap: 'wrap', gap: calcRem(24), background: 'white' }
  const itemStyle = { width: calcRem(624), height: calcRem(344) }
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
