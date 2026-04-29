import LineStack from "./line/stack";
import { useContext } from "react";
import { ScaleContext } from "react-responsive-scale";

export default function App() {
  const { calcRem } = useContext(ScaleContext);

  const groupStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: calcRem(24),
    background: "#d8d8d8",
  };
  const itemStyle = { width: calcRem(624), height: calcRem(344), background: "white" };
  return (
    <div style={groupStyle}>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>
        <LineStack />
      </div>
      <div style={itemStyle}>{/* <LineAreaBasic /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
      <div style={itemStyle}>{/* <LineSimple /> */}</div>
    </div>
  );
}
