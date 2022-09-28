// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7zgBTwbPpHbjHNGdtqUv3x
// Component: LE3N2Gozaj
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import DoctorPreview from "../../DoctorPreview"; // plasmic-import: jb-pn_CJ2Ad/component
import Button from "../../Button"; // plasmic-import: QtbTn9PNS3o/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 7zgBTwbPpHbjHNGdtqUv3x/projectcss
import sty from "./PlasmicHomePage.module.css"; // plasmic-import: LE3N2Gozaj/css

import SearchSvgrepoComsvgIcon from "./icons/PlasmicIcon__SearchSvgrepoComsvg"; // plasmic-import: 2mJFkmELjr/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 8Xy2TdC8dVc/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: 0TsNv0K1B/icon
import Icon16PxCheckIcon from "./icons/PlasmicIcon__Icon16PxCheck"; // plasmic-import: XZAvKNBJmZ/icon
import Rectangle116Icon from "./icons/PlasmicIcon__Rectangle116"; // plasmic-import: vLDRE8TUZ/icon
import Group4195Icon from "./icons/PlasmicIcon__Group4195"; // plasmic-import: jA2NdGFwnK/icon
import Ellipse2Icon from "./icons/PlasmicIcon__Ellipse2"; // plasmic-import: u3wA3h_cil/icon

export type PlasmicHomePage__VariantMembers = {};

export type PlasmicHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomePage__VariantsArgs;
export const PlasmicHomePage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomePage__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomePage__ArgsType;
export const PlasmicHomePage__ArgProps = new Array<ArgPropType>("children");

export type PlasmicHomePage__OverridesType = {
  root?: p.Flex<"div">;
  mainScreen?: p.Flex<"div">;
  frame290?: p.Flex<"div">;
  label2?: p.Flex<"div">;
  frame98?: p.Flex<"div">;
  frame5?: p.Flex<"div">;
  signUp?: p.Flex<"div">;
  frame99?: p.Flex<"div">;
  frame302?: p.Flex<"div">;
  frame300?: p.Flex<"div">;
  signUp2?: p.Flex<"div">;
  frame100?: p.Flex<"div">;
  frame307?: p.Flex<"div">;
  signUp3?: p.Flex<"div">;
  frame308?: p.Flex<"div">;
  signUp4?: p.Flex<"div">;
  frame309?: p.Flex<"div">;
  signUp5?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  header?: p.Flex<"div">;
  headerMenu?: p.Flex<"div">;
  menuItem?: p.Flex<"div">;
  menuItem2?: p.Flex<"div">;
  features?: p.Flex<"div">;
  menuItem3?: p.Flex<"div">;
  features2?: p.Flex<"div">;
  menuItem4?: p.Flex<"div">;
  features3?: p.Flex<"div">;
  controlPanel?: p.Flex<"div">;
  input?: p.Flex<"div">;
  label21?: p.Flex<"div">;
  label22?: p.Flex<"div">;
  inputField2?: p.Flex<"div">;
  text19?: p.Flex<"div">;
  hintMessage?: p.Flex<"div">;
  buttonContainer?: p.Flex<"div">;
  button12?: p.Flex<"div">;
  iconCopyBig10?: p.Flex<"div">;
  group296?: p.Flex<"div">;
  rectangle158?: p.Flex<"div">;
  text20?: p.Flex<"div">;
  iconSelectBig12?: p.Flex<"div">;
  rectangle159?: p.Flex<"div">;
  avatar?: p.Flex<"div">;
  mk?: p.Flex<"div">;
  mk2?: p.Flex<"div">;
};

export interface DefaultHomePageProps {}

function PlasmicHomePage__RenderFunc(props: {
  variants: PlasmicHomePage__VariantsArgs;
  args: PlasmicHomePage__ArgsType;
  overrides: PlasmicHomePage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"mainScreen"}
            data-plasmic-override={overrides.mainScreen}
            className={classNames(projectcss.all, sty.mainScreen)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame290"}
              data-plasmic-override={overrides.frame290}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame290)}
            >
              <DoctorPreview
                className={classNames(
                  "__wab_instance",
                  sty.doctorPreview__qRav5
                )}
                slot3={p.renderPlasmicSlot({
                  defaultContents: "from 200 AED",
                  value: args.children
                })}
              />

              <DoctorPreview
                className={classNames(
                  "__wab_instance",
                  sty.doctorPreview__fe85J
                )}
                jessyMendiola={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lPuGr
                    )}
                  >
                    {"Josiah Sarpong"}
                  </div>
                }
                label4={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tqCx3
                    )}
                  >
                    {"15"}
                  </div>
                }
                slot={"Jumeirah Beach Road, Opposite Jumeirah Park, Dubai"}
                slot2={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xmwG6)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"167px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/blank_project/images/rectangle124Jpg2.jpeg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                {"Emirates Hospital"}
              </DoctorPreview>

              <DoctorPreview
                className={classNames(
                  "__wab_instance",
                  sty.doctorPreview___1I63S
                )}
                jessyMendiola={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___75Qi6
                    )}
                  >
                    {"Saeed bin Suroor"}
                  </div>
                }
                label4={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nFbBs
                    )}
                  >
                    {"47"}
                  </div>
                }
                slot={"Jumeirah Beach Road, Opposite Jumeirah Park, Dubai"}
                slot2={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__fd6Kb)}
                    displayHeight={"153px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/blank_project/images/rectangle1241Jpg.jpeg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                {"Emirates Hospital"}
              </DoctorPreview>

              <DoctorPreview
                className={classNames(
                  "__wab_instance",
                  sty.doctorPreview__hIAcU
                )}
                jessyMendiola={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xf5Ct
                    )}
                  >
                    {"Bruno Rodrigues"}
                  </div>
                }
                label2={
                  <div
                    data-plasmic-name={"label2"}
                    data-plasmic-override={overrides.label2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label2
                    )}
                  >
                    {"4.7"}
                  </div>
                }
                label4={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2Dhu2
                    )}
                  >
                    {"32"}
                  </div>
                }
                slot={"1st street, Trio Building, Dubai"}
                slot2={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ueY8V)}
                    displayHeight={"153px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"167px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/blank_project/images/rectangle1243Jpg.jpeg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                {"Medcare Medical Center"}
              </DoctorPreview>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame98"}
              data-plasmic-override={overrides.frame98}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame98)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame5"}
                data-plasmic-override={overrides.frame5}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5)}
              >
                <div
                  data-plasmic-name={"signUp"}
                  data-plasmic-override={overrides.signUp}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.signUp
                  )}
                >
                  {"Top reviewed"}
                </div>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame99"}
              data-plasmic-override={overrides.frame99}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame99)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame302"}
                data-plasmic-override={overrides.frame302}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame302)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame300"}
                  data-plasmic-override={overrides.frame300}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame300)}
                >
                  <div
                    data-plasmic-name={"signUp2"}
                    data-plasmic-override={overrides.signUp2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.signUp2
                    )}
                  >
                    {"Find a doctor"}
                  </div>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame100"}
                data-plasmic-override={overrides.frame100}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame100)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame307"}
                  data-plasmic-override={overrides.frame307}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame307)}
                >
                  <div
                    data-plasmic-name={"signUp3"}
                    data-plasmic-override={overrides.signUp3}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.signUp3
                    )}
                  >
                    {"Speciality"}
                  </div>

                  <input
                    className={classNames(
                      projectcss.all,
                      projectcss.input,
                      sty.textInput__owpBm
                    )}
                    placeholder={"Enter doctor’s speciality" as const}
                    size={1 as const}
                    type={"text" as const}
                    value={"" as const}
                  />
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame308"}
                  data-plasmic-override={overrides.frame308}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame308)}
                >
                  <div
                    data-plasmic-name={"signUp4"}
                    data-plasmic-override={overrides.signUp4}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.signUp4
                    )}
                  >
                    {"Location"}
                  </div>

                  <input
                    className={classNames(
                      projectcss.all,
                      projectcss.input,
                      sty.textInput__tzUfR
                    )}
                    placeholder={"Enter city / district / area" as const}
                    size={1 as const}
                    type={"text" as const}
                    value={"" as const}
                  />
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame309"}
                  data-plasmic-override={overrides.frame309}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame309)}
                >
                  <div
                    data-plasmic-name={"signUp5"}
                    data-plasmic-override={overrides.signUp5}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.signUp5
                    )}
                  >
                    {"Date (optional)"}
                  </div>

                  <input
                    className={classNames(
                      projectcss.all,
                      projectcss.input,
                      sty.textInput__pM0Pc
                    )}
                    placeholder={"Thu, 22 Sep 2022" as const}
                    size={1 as const}
                    type={"text" as const}
                    value={"" as const}
                  />
                </p.Stack>

                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  showStartIcon={true}
                  startIcon={
                    <SearchSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__q0TBy)}
                      role={"img"}
                    />
                  }
                >
                  {"Search"}
                </Button>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              hasGap={true}
              className={classNames(projectcss.all, sty.header)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ukuqy
                )}
              >
                {"RateCare"}
              </div>

              {false ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"headerMenu"}
                  data-plasmic-override={overrides.headerMenu}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.headerMenu)}
                >
                  <div
                    data-plasmic-name={"menuItem"}
                    data-plasmic-override={overrides.menuItem}
                    className={classNames(projectcss.all, sty.menuItem)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3Qnfu
                      )}
                    >
                      {"Features"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"menuItem2"}
                    data-plasmic-override={overrides.menuItem2}
                    className={classNames(projectcss.all, sty.menuItem2)}
                  >
                    <div
                      data-plasmic-name={"features"}
                      data-plasmic-override={overrides.features}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.features
                      )}
                    >
                      {"Pricing"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"menuItem3"}
                    data-plasmic-override={overrides.menuItem3}
                    className={classNames(projectcss.all, sty.menuItem3)}
                  >
                    <div
                      data-plasmic-name={"features2"}
                      data-plasmic-override={overrides.features2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.features2
                      )}
                    >
                      {"Learn"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"menuItem4"}
                    data-plasmic-override={overrides.menuItem4}
                    className={classNames(projectcss.all, sty.menuItem4)}
                  >
                    <div
                      data-plasmic-name={"features3"}
                      data-plasmic-override={overrides.features3}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.features3
                      )}
                    >
                      {"Community"}
                    </div>
                  </div>
                </p.Stack>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"controlPanel"}
                data-plasmic-override={overrides.controlPanel}
                hasGap={true}
                className={classNames(projectcss.all, sty.controlPanel)}
              >
                {false ? (
                  <div
                    data-plasmic-name={"input"}
                    data-plasmic-override={overrides.input}
                    className={classNames(projectcss.all, sty.input)}
                  >
                    {false ? (
                      <div
                        data-plasmic-name={"label21"}
                        data-plasmic-override={overrides.label21}
                        className={classNames(projectcss.all, sty.label21)}
                      >
                        <div
                          data-plasmic-name={"label22"}
                          data-plasmic-override={overrides.label22}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.label22
                          )}
                        >
                          {"Label"}
                        </div>
                      </div>
                    ) : null}

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"inputField2"}
                      data-plasmic-override={overrides.inputField2}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.inputField2)}
                    >
                      <SearchIcon
                        className={classNames(projectcss.all, sty.svg__yQr9F)}
                        role={"img"}
                      />

                      <div
                        data-plasmic-name={"text19"}
                        data-plasmic-override={overrides.text19}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text19
                        )}
                      >
                        {"Search"}
                      </div>

                      {false ? (
                        <Icon16PxCheckIcon
                          className={classNames(projectcss.all, sty.svg__d1X8A)}
                          role={"img"}
                        />
                      ) : null}
                    </p.Stack>

                    {false ? (
                      <div
                        data-plasmic-name={"hintMessage"}
                        data-plasmic-override={overrides.hintMessage}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.hintMessage
                        )}
                      >
                        {"Hint message"}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {false ? (
                  <div
                    data-plasmic-name={"buttonContainer"}
                    data-plasmic-override={overrides.buttonContainer}
                    className={classNames(projectcss.all, sty.buttonContainer)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"button12"}
                      data-plasmic-override={overrides.button12}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.button12)}
                    >
                      <div
                        data-plasmic-name={"iconCopyBig10"}
                        data-plasmic-override={overrides.iconCopyBig10}
                        className={classNames(
                          projectcss.all,
                          sty.iconCopyBig10
                        )}
                      >
                        <div
                          data-plasmic-name={"group296"}
                          data-plasmic-override={overrides.group296}
                          className={classNames(projectcss.all, sty.group296)}
                        >
                          <div
                            data-plasmic-name={"rectangle158"}
                            data-plasmic-override={overrides.rectangle158}
                            className={classNames(
                              projectcss.all,
                              sty.rectangle158
                            )}
                          />

                          <Rectangle116Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__gcbVj
                            )}
                            role={"img"}
                          />
                        </div>
                      </div>

                      <div
                        data-plasmic-name={"text20"}
                        data-plasmic-override={overrides.text20}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text20
                        )}
                      >
                        {"Button"}
                      </div>

                      {false ? (
                        <div
                          data-plasmic-name={"iconSelectBig12"}
                          data-plasmic-override={overrides.iconSelectBig12}
                          className={classNames(
                            projectcss.all,
                            sty.iconSelectBig12
                          )}
                        >
                          <Group4195Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__i24Ij
                            )}
                            role={"img"}
                          />
                        </div>
                      ) : null}
                      {false ? (
                        <div
                          data-plasmic-name={"rectangle159"}
                          data-plasmic-override={overrides.rectangle159}
                          className={classNames(
                            projectcss.all,
                            sty.rectangle159
                          )}
                        />
                      ) : null}
                    </p.Stack>
                  </div>
                ) : null}

                <div
                  data-plasmic-name={"avatar"}
                  data-plasmic-override={overrides.avatar}
                  className={classNames(projectcss.all, sty.avatar)}
                >
                  <Ellipse2Icon
                    className={classNames(projectcss.all, sty.svg__h7Rzr)}
                    role={"img"}
                  />

                  <div
                    data-plasmic-name={"mk"}
                    data-plasmic-override={overrides.mk}
                    className={classNames(projectcss.all, sty.mk)}
                  >
                    <div
                      data-plasmic-name={"mk2"}
                      data-plasmic-override={overrides.mk2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.mk2
                      )}
                    >
                      {"SR"}
                    </div>
                  </div>
                </div>
              </p.Stack>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainScreen",
    "frame290",
    "label2",
    "frame98",
    "frame5",
    "signUp",
    "frame99",
    "frame302",
    "frame300",
    "signUp2",
    "frame100",
    "frame307",
    "signUp3",
    "frame308",
    "signUp4",
    "frame309",
    "signUp5",
    "button",
    "header",
    "headerMenu",
    "menuItem",
    "menuItem2",
    "features",
    "menuItem3",
    "features2",
    "menuItem4",
    "features3",
    "controlPanel",
    "input",
    "label21",
    "label22",
    "inputField2",
    "text19",
    "hintMessage",
    "buttonContainer",
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159",
    "avatar",
    "mk",
    "mk2"
  ],
  mainScreen: [
    "mainScreen",
    "frame290",
    "label2",
    "frame98",
    "frame5",
    "signUp",
    "frame99",
    "frame302",
    "frame300",
    "signUp2",
    "frame100",
    "frame307",
    "signUp3",
    "frame308",
    "signUp4",
    "frame309",
    "signUp5",
    "button",
    "header",
    "headerMenu",
    "menuItem",
    "menuItem2",
    "features",
    "menuItem3",
    "features2",
    "menuItem4",
    "features3",
    "controlPanel",
    "input",
    "label21",
    "label22",
    "inputField2",
    "text19",
    "hintMessage",
    "buttonContainer",
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159",
    "avatar",
    "mk",
    "mk2"
  ],
  frame290: ["frame290", "label2"],
  label2: ["label2"],
  frame98: ["frame98", "frame5", "signUp"],
  frame5: ["frame5", "signUp"],
  signUp: ["signUp"],
  frame99: [
    "frame99",
    "frame302",
    "frame300",
    "signUp2",
    "frame100",
    "frame307",
    "signUp3",
    "frame308",
    "signUp4",
    "frame309",
    "signUp5",
    "button"
  ],
  frame302: ["frame302", "frame300", "signUp2"],
  frame300: ["frame300", "signUp2"],
  signUp2: ["signUp2"],
  frame100: [
    "frame100",
    "frame307",
    "signUp3",
    "frame308",
    "signUp4",
    "frame309",
    "signUp5",
    "button"
  ],
  frame307: ["frame307", "signUp3"],
  signUp3: ["signUp3"],
  frame308: ["frame308", "signUp4"],
  signUp4: ["signUp4"],
  frame309: ["frame309", "signUp5"],
  signUp5: ["signUp5"],
  button: ["button"],
  header: [
    "header",
    "headerMenu",
    "menuItem",
    "menuItem2",
    "features",
    "menuItem3",
    "features2",
    "menuItem4",
    "features3",
    "controlPanel",
    "input",
    "label21",
    "label22",
    "inputField2",
    "text19",
    "hintMessage",
    "buttonContainer",
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159",
    "avatar",
    "mk",
    "mk2"
  ],
  headerMenu: [
    "headerMenu",
    "menuItem",
    "menuItem2",
    "features",
    "menuItem3",
    "features2",
    "menuItem4",
    "features3"
  ],
  menuItem: ["menuItem"],
  menuItem2: ["menuItem2", "features"],
  features: ["features"],
  menuItem3: ["menuItem3", "features2"],
  features2: ["features2"],
  menuItem4: ["menuItem4", "features3"],
  features3: ["features3"],
  controlPanel: [
    "controlPanel",
    "input",
    "label21",
    "label22",
    "inputField2",
    "text19",
    "hintMessage",
    "buttonContainer",
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159",
    "avatar",
    "mk",
    "mk2"
  ],
  input: [
    "input",
    "label21",
    "label22",
    "inputField2",
    "text19",
    "hintMessage"
  ],
  label21: ["label21", "label22"],
  label22: ["label22"],
  inputField2: ["inputField2", "text19"],
  text19: ["text19"],
  hintMessage: ["hintMessage"],
  buttonContainer: [
    "buttonContainer",
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159"
  ],
  button12: [
    "button12",
    "iconCopyBig10",
    "group296",
    "rectangle158",
    "text20",
    "iconSelectBig12",
    "rectangle159"
  ],
  iconCopyBig10: ["iconCopyBig10", "group296", "rectangle158"],
  group296: ["group296", "rectangle158"],
  rectangle158: ["rectangle158"],
  text20: ["text20"],
  iconSelectBig12: ["iconSelectBig12"],
  rectangle159: ["rectangle159"],
  avatar: ["avatar", "mk", "mk2"],
  mk: ["mk", "mk2"],
  mk2: ["mk2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  mainScreen: "div";
  frame290: "div";
  label2: "div";
  frame98: "div";
  frame5: "div";
  signUp: "div";
  frame99: "div";
  frame302: "div";
  frame300: "div";
  signUp2: "div";
  frame100: "div";
  frame307: "div";
  signUp3: "div";
  frame308: "div";
  signUp4: "div";
  frame309: "div";
  signUp5: "div";
  button: typeof Button;
  header: "div";
  headerMenu: "div";
  menuItem: "div";
  menuItem2: "div";
  features: "div";
  menuItem3: "div";
  features2: "div";
  menuItem4: "div";
  features3: "div";
  controlPanel: "div";
  input: "div";
  label21: "div";
  label22: "div";
  inputField2: "div";
  text19: "div";
  hintMessage: "div";
  buttonContainer: "div";
  button12: "div";
  iconCopyBig10: "div";
  group296: "div";
  rectangle158: "div";
  text20: "div";
  iconSelectBig12: "div";
  rectangle159: "div";
  avatar: "div";
  mk: "div";
  mk2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePage__VariantsArgs;
    args?: PlasmicHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomePage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomePage__ArgProps,
          internalVariantPropNames: PlasmicHomePage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePage";
  } else {
    func.displayName = `PlasmicHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePage = Object.assign(
  // Top-level PlasmicHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mainScreen: makeNodeComponent("mainScreen"),
    frame290: makeNodeComponent("frame290"),
    label2: makeNodeComponent("label2"),
    frame98: makeNodeComponent("frame98"),
    frame5: makeNodeComponent("frame5"),
    signUp: makeNodeComponent("signUp"),
    frame99: makeNodeComponent("frame99"),
    frame302: makeNodeComponent("frame302"),
    frame300: makeNodeComponent("frame300"),
    signUp2: makeNodeComponent("signUp2"),
    frame100: makeNodeComponent("frame100"),
    frame307: makeNodeComponent("frame307"),
    signUp3: makeNodeComponent("signUp3"),
    frame308: makeNodeComponent("frame308"),
    signUp4: makeNodeComponent("signUp4"),
    frame309: makeNodeComponent("frame309"),
    signUp5: makeNodeComponent("signUp5"),
    button: makeNodeComponent("button"),
    header: makeNodeComponent("header"),
    headerMenu: makeNodeComponent("headerMenu"),
    menuItem: makeNodeComponent("menuItem"),
    menuItem2: makeNodeComponent("menuItem2"),
    features: makeNodeComponent("features"),
    menuItem3: makeNodeComponent("menuItem3"),
    features2: makeNodeComponent("features2"),
    menuItem4: makeNodeComponent("menuItem4"),
    features3: makeNodeComponent("features3"),
    controlPanel: makeNodeComponent("controlPanel"),
    input: makeNodeComponent("input"),
    label21: makeNodeComponent("label21"),
    label22: makeNodeComponent("label22"),
    inputField2: makeNodeComponent("inputField2"),
    text19: makeNodeComponent("text19"),
    hintMessage: makeNodeComponent("hintMessage"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    button12: makeNodeComponent("button12"),
    iconCopyBig10: makeNodeComponent("iconCopyBig10"),
    group296: makeNodeComponent("group296"),
    rectangle158: makeNodeComponent("rectangle158"),
    text20: makeNodeComponent("text20"),
    iconSelectBig12: makeNodeComponent("iconSelectBig12"),
    rectangle159: makeNodeComponent("rectangle159"),
    avatar: makeNodeComponent("avatar"),
    mk: makeNodeComponent("mk"),
    mk2: makeNodeComponent("mk2"),

    // Metadata about props expected for PlasmicHomePage
    internalVariantProps: PlasmicHomePage__VariantProps,
    internalArgProps: PlasmicHomePage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomePage;
/* prettier-ignore-end */
