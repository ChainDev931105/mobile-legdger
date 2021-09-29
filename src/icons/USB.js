// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number,
  color?: string,
};
export default function USB({ size = 16, color = "#6490F1" }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 14" fill="none">
      <Path
        d="M16 6.66279C16 6.76823 15.9576 6.87026 15.8878 6.91788L13.6655 8.73748C13.6306 8.76468 13.5956 8.78509 13.5532 8.78509C13.5183 8.78509 13.4759 8.77489 13.441 8.74768C13.3712 8.68986 13.3288 8.59463 13.3288 8.48239V7.27159H7.37521C8.00624 8.61844 8.38535 10.9074 9.11115 10.9074H9.77709V9.99589C9.77709 9.82583 9.87436 9.69319 9.99906 9.69319H12.2214C12.3461 9.69319 12.4433 9.82583 12.4433 9.99589V13.0263C12.4433 13.1963 12.3461 13.329 12.2214 13.329H9.99906C9.87436 13.329 9.77709 13.1963 9.77709 13.0263V12.1182H9.11115C7.23055 12.1182 7.08839 7.27159 6.00094 7.27159H3.4993C3.29727 8.31234 2.6039 9.09119 1.77833 9.09119C0.798129 9.08779 0 7.99943 0 6.66279C0 5.32615 0.798129 4.23779 1.77833 4.23779C2.6039 4.23779 3.29977 5.01325 3.4993 6.05739C4.47451 6.05739 4.59423 6.3805 5.35994 4.00312C6.36009 0.97272 6.80904 1.2108 8.07607 1.2108C8.26313 0.499965 8.74949 0 9.33313 0C10.0689 0 10.6675 0.812867 10.6675 1.8196C10.6675 2.82633 10.0714 3.6392 9.33313 3.6392C8.74949 3.6392 8.26313 3.13583 8.07607 2.4284H7.33281C6.60701 2.4284 6.2279 4.72075 5.59688 6.0642H13.3313V4.8534C13.3313 4.74116 13.3737 4.64593 13.4435 4.58811C13.5133 4.53029 13.6031 4.54049 13.6655 4.59831L15.8878 6.41791C15.9576 6.45532 16 6.55736 16 6.66279Z"
        fill={color}
      />
    </Svg>
  );
}
