import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import domResize from "./domResize";
import wonderland from "./themes/wonderland.json";
import fastDeepEqual from "./fastDeepEqual";
import { memo } from "react";

echarts.registerTheme("wonderland", wonderland);

function ReactEcharts(props) {
  const { theme, option } = props;
  const preOptionRef = useRef();

  const dom = useRef();

  useEffect(() => {
    console.log("mount");
    if (!dom.current) return;
    const el = dom.current;

    /** @type {import('echarts').ECharts} */
    const chart = echarts.init(el, theme, {
      renderer: "svg",
      // useDirtyRect: true,
    });
    const onResize = () => {
      chart.resize();
    };
    domResize.on(el, onResize);
    el._chart = chart;

    return () => {
      preOptionRef.current = undefined;
      domResize.off(el, onResize);
      el._chart?.dispose();
      el._chart = null;
    };
  }, [theme]);

  useEffect(() => {
    console.log("theme change", theme);
    if (dom.current && dom.current._chart && preOptionRef.current) {
      dom.current._chart.setOption(preOptionRef.current);
    }
  }, [theme]);

  useEffect(() => {
    if (!fastDeepEqual(option, preOptionRef.current)) {
      if (dom.current && dom.current._chart && option) {
        dom.current._chart.setOption(option);
      }
      preOptionRef.current = option;
    }
  }, [option]);

  console.log("render", new Date().getSeconds());
  return <div style={{ width: "100%", height: "100%" }} ref={dom}></div>;
}

const propsAreEqual = (prevProps, nextProps) => {
  return fastDeepEqual(prevProps, nextProps);
};

const MemoReactEcharts = memo(ReactEcharts, propsAreEqual);

export default MemoReactEcharts;
