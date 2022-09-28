// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolidGeneralHomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolidGeneralHomeIcon(props: SolidGeneralHomeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.497 3.447a2.083 2.083 0 00-2.994 0l-3.998 4.13c-.23.237-.384.537-.444.861a23.963 23.963 0 00-.106 8.02l.147.942a.611.611 0 00.604.517H7.5c.23 0 .417-.187.417-.417v-5.833h4.166V17.5c0 .23.187.417.417.417h2.794c.301 0 .557-.22.604-.517l.147-.942c.415-2.66.38-5.371-.106-8.02a1.673 1.673 0 00-.444-.861l-3.998-4.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SolidGeneralHomeIcon;
/* prettier-ignore-end */
