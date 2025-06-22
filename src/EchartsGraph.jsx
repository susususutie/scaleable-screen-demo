import { useEffect, useMemo, useRef } from 'react'
import domResize from './domResize'
import * as echarts from 'echarts'

export default function EchartsGraph(props) {
  const { option } = props

  const dom = useRef()
  /**
   * @type {React.RefObject<import('echarts').ECharts>}
   */
  const instance = useRef()

  useEffect(() => {
    const myChart = echarts.init(dom.current, null, {
      renderer: 'canvas',
      useDirtyRect: true,
    })
    myChart.showLoading()

    const onResize = () => {
      myChart.resize()
    }
    domResize.on(dom.current, onResize)
    instance.current = myChart

    return () => {
      domResize.off(dom, onResize)
      myChart.dispose()
    }
  }, [])

  const optionsDepKey = useMemo(() => {
    return JSON.stringify(option)
  }, [option])
  useEffect(() => {
    if (!instance.current) return
    if (!option || !option.series || !option.series.length || option.series.every(i => !i.data)) {
      instance.current.showLoading()
    } else {
      instance.current.setOption(option)
      instance.current.hideLoading()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsDepKey])

  return <div style={{ width: '100%', height: '100%' }} ref={dom}></div>
}
