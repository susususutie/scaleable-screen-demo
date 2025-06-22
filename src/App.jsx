import useRem from './useRem'
import GeoDemo from './GeoDemo'
import EchartsGraph from './EchartsGraph'
import { graphic } from 'echarts'

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
        color: '#fff',
      }}
    >
      {!!size && (
        <div
          style={{
            margin: 'auto',
            position: 'relative',
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
              position: 'absolute',
              left: 0,
              top: 0,
              width: sizeFn.calcWidth(20),
              height: sizeFn.calcHeight(30),
            }}
          >
            <EchartsGraph
              option={{
                grid: { top: 0, right: 0, bottom: 0, left: 0, show: false },
                series: [
                  {
                    type: 'pie',
                    height: '200%',
                    left: '1%',
                    right: '1%',
                    top: '0%',
                    bottom: '0%',
                    radius: ['85%', '100%'],
                    center: ['50%', '50.001%'],
                    startAngle: 180,
                    endAngle: 0,
                    label: false,
                    labelLine: false,
                    silent: true,
                    color: ['#3385ff', '#f0f8ff'],
                    data: [{ value: 30 }, { value: 100 - 30 }],
                  },
                ],
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              left: sizeFn.calcWidth(20),
              top: 0,
              width: sizeFn.calcWidth(60),
              height: sizeFn.calcHeight(80),
            }}
          >
            <GeoDemo />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: sizeFn.calcHeight(80),
              width: sizeFn.calcWidth(60),
              height: sizeFn.calcHeight(20),
              zIndex: 1,
            }}
          >
            <EchartsGraph
              option={{
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                  text: 'Gradient Stacked Area Chart',
                  textStyle: {
                    fontSize: sizeFn.calcPx(16),
                    color: '#ddd',
                  },
                },
                tooltip: {
                  trigger: 'item',
                  textStyle: {
                    fontSize: sizeFn.calcPx(14),
                  },
                  axisPointer: {
                    type: 'none',
                  },
                },
                legend: {
                  data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
                  padding: sizeFn.calcPx(5),
                  itemGap: sizeFn.calcPx(8),
                  itemWidth: sizeFn.calcPx(16),
                  itemHeight: sizeFn.calcPx(16),
                  textStyle: {
                    color: '#ddd',
                    fontSize: sizeFn.calcPx(12),
                  },
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true,
                },
                xAxis: [
                  {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { color: '#aaa', fontSize: sizeFn.calcPx(14) },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  },
                ],
                yAxis: [
                  {
                    type: 'value',
                    axisLabel: { color: '#aaa', fontSize: sizeFn.calcPx(14) },
                    splitLine: { show: false },
                  },
                ],
                series: [
                  {
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                      opacity: 0.8,
                      color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgb(128, 255, 165)',
                        },
                        {
                          offset: 1,
                          color: 'rgb(1, 191, 236)',
                        },
                      ]),
                    },
                    emphasis: {
                      focus: 'series',
                    },
                    data: [140, 232, 101, 264, 90, 340, 250],
                  },
                  {
                    name: 'Line 2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                      opacity: 0.8,
                      color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgb(0, 221, 255)',
                        },
                        {
                          offset: 1,
                          color: 'rgb(77, 119, 255)',
                        },
                      ]),
                    },
                    emphasis: {
                      focus: 'series',
                    },
                    data: [120, 282, 111, 234, 220, 340, 310],
                  },
                  {
                    name: 'Line 3',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                      opacity: 0.8,
                      color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgb(55, 162, 255)',
                        },
                        {
                          offset: 1,
                          color: 'rgb(116, 21, 219)',
                        },
                      ]),
                    },
                    emphasis: {
                      focus: 'series',
                    },
                    data: [320, 132, 201, 334, 190, 130, 220],
                  },
                  {
                    name: 'Line 4',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                      opacity: 0.8,
                      color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgb(255, 0, 135)',
                        },
                        {
                          offset: 1,
                          color: 'rgb(135, 0, 157)',
                        },
                      ]),
                    },
                    emphasis: {
                      focus: 'series',
                    },
                    data: [220, 402, 231, 134, 190, 230, 120],
                  },
                  {
                    name: 'Line 5',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                    showSymbol: false,
                    label: {
                      show: true,
                      position: 'top',
                    },
                    areaStyle: {
                      opacity: 0.8,
                      color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgb(255, 191, 0)',
                        },
                        {
                          offset: 1,
                          color: 'rgb(224, 62, 76)',
                        },
                      ]),
                    },
                    emphasis: {
                      focus: 'series',
                    },
                    data: [220, 302, 181, 234, 210, 290, 150],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
