// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseIcon(props: CloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M7.854 2.688a.383.383 0 10-.542-.542L5 4.458 2.688 2.146a.383.383 0 00-.542.542L4.458 5 2.146 7.312a.383.383 0 00.542.542L5 5.542l2.312 2.312a.383.383 0 00.542-.542L5.542 5l2.312-2.312z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CloseIcon;
/* prettier-ignore-end */
