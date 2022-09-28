// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutlineGeneralCalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutlineGeneralCalendarIcon(
  props: OutlineGeneralCalendarIconProps
) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7 3.25a.75.75 0 01.75.75v1.668a47.911 47.911 0 018.5 0V4a.75.75 0 011.5 0v1.816a3.375 3.375 0 012.872 2.899l.087.653c.364 2.746.332 5.53-.094 8.268a3.01 3.01 0 01-2.678 2.532l-1.193.118a48.345 48.345 0 01-9.488 0l-1.193-.118a3.01 3.01 0 01-2.678-2.532 28.995 28.995 0 01-.094-8.268l.087-.653A3.375 3.375 0 016.25 5.816V4A.75.75 0 017 3.25zm.445 3.953c3.03-.299 6.08-.299 9.11 0l.905.09c.867.085 1.56.756 1.675 1.619l.087.653c.03.228.057.456.082.685H4.696c.025-.229.052-.457.082-.685l.087-.653a1.875 1.875 0 011.675-1.62l.905-.09zM4.577 11.75a27.495 27.495 0 00.29 5.655 1.51 1.51 0 001.343 1.27l1.193.118c3.057.302 6.137.302 9.194 0l1.193-.118a1.51 1.51 0 001.343-1.27c.292-1.872.388-3.767.29-5.655H4.577z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutlineGeneralCalendarIcon;
/* prettier-ignore-end */
