import Svg, { Path, Rect } from "react-native-svg";

import { colors } from "../theme/colors";

type LogoProps = {
  size?: number;
};

/** Monogram shared with assets/logo.svg, the favicon, and the app icons. */
export function Logo({ size = 32 }: LogoProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <Rect width={64} height={64} rx={14} fill={colors.heading} />
      <Path
        d="M13.5 18H24.5V39C24.5 50 13.5 50 13.5 39"
        fill="none"
        stroke={colors.background}
        strokeWidth={6.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.5 18V47M50.5 18V47M36.5 32.5H50.5"
        fill="none"
        stroke={colors.background}
        strokeWidth={6.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
