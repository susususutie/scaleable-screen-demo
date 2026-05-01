import LineStack from "./line/stack";
import LineSimple from "./line/simple";
import LineAreaBasic from "./line/area-basic";
import { useContext } from "react";
import { ScaleContext } from "react-responsive-scale";

export default function App() {
  const { calcRem } = useContext(ScaleContext);

  const rows = 3; // 行数
  const rowGap = 16; // 上下行之间的间隔
  const columns = 4; // 列数
  const columnGap = 12; // 左右列之间的间隔

  const groupStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    // gap: `${calcRem(rowGap)} ${calcRem(columnGap)}`,
    rowGap: calcRem(rowGap),
    columnGap: calcRem(columnGap),
    background: "#d8d8d8",
    "--w": `calc(${100 / columns}% - ${calcRem((columnGap * (columns - 1)) / columns)})`,
    "--h": `calc(${100 / rows}% - ${calcRem((rowGap * (rows - 1)) / rows)})`,
  };
  const itemStyle = { width: "var(--w)", height: "var(--h)", backgroundColor: "white" };
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
  );
}
