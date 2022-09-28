// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.037 2.704c.344-.344.81-.537 1.296-.537H8A1.833 1.833 0 019.833 4v1.333a.5.5 0 11-1 0V4A.833.833 0 008 3.167H3.333A.833.833 0 002.5 4v8a.833.833 0 00.833.833H8A.834.834 0 008.833 12v-1.333a.5.5 0 111 0V12A1.834 1.834 0 018 13.833H3.333A1.833 1.833 0 011.5 12V4c0-.486.193-.953.537-1.296z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.793 8.5H4.667a.5.5 0 110-1h8.126l-1.147-1.146a.5.5 0 010-.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
