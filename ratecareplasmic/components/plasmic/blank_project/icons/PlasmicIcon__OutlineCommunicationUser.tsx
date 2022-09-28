// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutlineCommunicationUserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutlineCommunicationUserIcon(
  props: OutlineCommunicationUserIconProps
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
          "M7.75 7.5a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM12 4.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm-4 10A2.25 2.25 0 005.75 17v1.188c0 .018.013.034.031.037 4.119.672 8.32.672 12.438 0a.037.037 0 00.031-.037V17A2.25 2.25 0 0016 14.75h-.34a.253.253 0 00-.079.012l-.865.283a8.751 8.751 0 01-5.432 0l-.866-.283a.252.252 0 00-.077-.012H8zM4.25 17A3.75 3.75 0 018 13.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 004.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0119.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.095 40.095 0 01-12.92 0 1.537 1.537 0 01-1.29-1.517V17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutlineCommunicationUserIcon;
/* prettier-ignore-end */
