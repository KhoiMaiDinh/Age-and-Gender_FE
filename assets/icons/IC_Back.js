import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import { memo } from "react";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M16 22 6 12 16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
