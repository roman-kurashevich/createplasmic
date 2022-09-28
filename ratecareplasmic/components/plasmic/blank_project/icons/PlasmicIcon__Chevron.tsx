// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronIcon(props: ChevronIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.576 7.242a.6.6 0 10.848.849L10 5.515l2.576 2.576a.6.6 0 00.848-.849l-3-3a.6.6 0 00-.848 0l-3 3zm6.848 5.516a.6.6 0 00-.848-.849L10 14.485l-2.576-2.576a.6.6 0 10-.848.849l3 3a.6.6 0 00.848 0l3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronIcon;
/* prettier-ignore-end */
