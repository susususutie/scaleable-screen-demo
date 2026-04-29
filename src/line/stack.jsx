import { useEffect } from "react";
import { useState } from "react";
import EChartsReact from "echarts-for-react";

const OPTION = {
  title: {
    text: "Stacked Line",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
      tooltip: {
        valueFormatter: (value) => {
          return value + " units";
        },
      },
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

export default function Demo() {
  const [option] = useState(OPTION);
  const [_count] = useState(0);
  const [theme] = useState("dark");
  const [renderer] = useState("canvas");

  useEffect(() => {
    const timer = setInterval(() => {
      // setCount(c => c + 1)
      // setTheme(t => (t === 'dark' ? 'light' : 'dark'))
      // setRenderer(r => (r === 'canvas' ? 'svg' : 'canvas'))
      // setOption(opt => ({
      //   ...opt,
      //   title: {
      //     text: OPTION.title.text ,
      //   },
      // }))
      // option.series[0].tooltip.valueFormatter = value => `${value}` + Math.random()
    }, 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <EChartsReact
      theme={theme}
      opts={{ renderer }}
      option={option}
      style={{ width: "100%", height: "100%" }}
      onEvents={{
        click: (params) => {
          console.log("click", params);
        },
        legendselectchanged: (params) => {
          console.log("legendselectchanged", params);
        },
      }}
    />
  );
}
