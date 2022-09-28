// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutlineGeneralClockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutlineGeneralClockIcon(props: OutlineGeneralClockIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M12.75 7a.75.75 0 00-1.5 0v5a.75.75 0 00.352.636l3 1.875a.75.75 0 10.796-1.272l-2.648-1.655V7z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM4.75 12a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutlineGeneralClockIcon;
/* prettier-ignore-end */
