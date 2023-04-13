import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import { memo } from "react";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={56}
      height={56}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h56v56H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFB6C1"
        d="M21 32.667h23.333l-8.05-10.5-5.366 7L27.3 24.5 21 32.667ZM18.667 42c-1.284 0-2.382-.457-3.296-1.37-.914-.915-1.371-2.013-1.371-3.297v-28c0-1.283.457-2.382 1.37-3.296.915-.913 2.013-1.37 3.297-1.37h28c1.283 0 2.382.457 3.295 1.37.914.914 1.371 2.013 1.371 3.296v28c0 1.284-.457 2.382-1.37 3.296-.914.914-2.013 1.371-3.296 1.371h-28Zm0-4.667h28v-28h-28v28Zm-9.334 14c-1.283 0-2.382-.457-3.296-1.37-.913-.914-1.37-2.013-1.37-3.296V14h4.666v32.667H42v4.666H9.333Z"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
