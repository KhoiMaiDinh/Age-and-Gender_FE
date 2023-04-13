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
        fill="#000000"
        d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h9v2H5v14h14v-9h2v9c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5ZM17 9V7h-2V5h2V3h2v2h2v2h-2v2h-2ZM6 17h12l-3.75-5-3 4L9 13l-3 4Z"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
