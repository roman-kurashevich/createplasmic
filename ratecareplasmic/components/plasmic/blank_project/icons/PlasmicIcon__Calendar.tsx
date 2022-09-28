// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarIcon(props: CalendarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.417 3.667H4.583c-1.012 0-1.833.82-1.833 1.833v12.833c0 1.013.82 1.834 1.833 1.834h12.834a1.834 1.834 0 001.833-1.834V5.5c0-1.013-.82-1.833-1.833-1.833zm-2.75-1.834V5.5M7.333 1.833V5.5M2.75 9.167h16.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
