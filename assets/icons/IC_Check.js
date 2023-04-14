import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={184}
    height={150}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m83.25 88.958 44.167-44.166-8.959-8.75-35.277 35.416L65.54 53.75l-8.958 8.75L83.25 88.958ZM.333 150v-12.5h183.334V150H.333Zm20.834-25c-3.334 0-6.25-1.25-8.75-3.75s-3.75-5.417-3.75-8.75v-100c0-3.333 1.25-6.25 3.75-8.75S17.833 0 21.167 0h141.666c3.334 0 6.25 1.25 8.75 3.75s3.75 5.417 3.75 8.75v100c0 3.333-1.25 6.25-3.75 8.75s-5.416 3.75-8.75 3.75H21.167Zm0-12.5h141.666v-100H21.167v100Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
