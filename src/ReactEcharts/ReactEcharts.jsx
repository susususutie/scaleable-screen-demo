import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import domResize from './domResize'
import { useMemo } from 'react'
import wonderland from './themes/wonderland.json'
import simpleHashWithBitwise from './simpleHashWithBitwise'

echarts.registerTheme('wonderland', wonderland)

export default function ReactEcharts(props) {
  const { option } = props

  const dom = useRef()
  /**
   * @type {React.RefObject<import('echarts').ECharts>}
   */
  const instance = useRef()

  useEffect(() => {
    const myChart = echarts.init(dom.current, 'wonderland', {
      renderer: 'svg',
      // useDirtyRect: true,
    })
    instance.current = myChart

    domResize.on(dom.current, () => {
      myChart.resize()
    })

    return () => {
      // domResize.off(dom, onResize)
      domResize.clean(dom)
      myChart.dispose()
    }
  }, [])

  const optionDepKey = useMemo(() => {
    const str = JSON.stringify(option)
    const hash = simpleHashWithBitwise(str)
    console.log(hash)
    return hash
  }, [option])
  useEffect(() => {
    if (instance.current && option) {
      instance.current.setOption(option)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionDepKey])

  return <div style={{ width: '100%', height: '100%' }} ref={dom}></div>
}
