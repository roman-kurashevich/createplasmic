// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search2Icon(props: Search2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M2.656 7.083a4.427 4.427 0 118.854 0 4.427 4.427 0 01-8.854 0zm4.427-5.49a5.49 5.49 0 103.488 9.73L14.5 15.25a.531.531 0 00.752-.752l-3.928-3.928a5.49 5.49 0 00-4.24-8.978z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Search2Icon;
/* prettier-ignore-end */
