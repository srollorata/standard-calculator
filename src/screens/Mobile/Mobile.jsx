import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Buttons } from "../../components/Buttons";
import { IconButton } from "../../components/IconButton";
import { IcTwotoneHistory2 } from "../../icons/IcTwotoneHistory2";
import { OcticonTrash244 } from "../../icons/OcticonTrash244";
import "./style.css";

export const Mobile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="mobile"
      style={{
        minWidth:
          screenWidth < 796
            ? "576px"
            : screenWidth >= 796 && screenWidth < 1138
            ? "796px"
            : screenWidth >= 1138 && screenWidth < 1254
            ? "1138px"
            : screenWidth >= 1254 && screenWidth < 1440
            ? "1254px"
            : screenWidth >= 1440
            ? "1440px"
            : undefined,
        padding:
          (screenWidth >= 796 && screenWidth < 1138) || screenWidth < 796
            ? "31px 30px"
            : (screenWidth >= 1138 && screenWidth < 1254) ||
              (screenWidth >= 1254 && screenWidth < 1440) ||
              screenWidth >= 1440
            ? "31px 34px"
            : undefined,
      }}
    >
      {((screenWidth >= 796 && screenWidth < 1138) || screenWidth < 796) && (
        <div className="frame">
          <div className="div">
            <div className="div-wrapper">
              <div className="text-wrapper">79+3=</div>
            </div>
            <div className="result">
              <div className="text-wrapper-2">82</div>
            </div>
          </div>
          <div className="commands">
            <div className="frame-2">
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="operation-default"
                text="%"
              />
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-2"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="operation-default"
                text="CE"
              />
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-3"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="operation-default"
                text="C"
              />
              <Buttons
                className="buttons-instance"
                divClassName="instance-node"
                property1="operation-default"
                text="/"
              />
            </div>
            <div className="frame-2">
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="7" />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="8" />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="9" />
              <Buttons
                className="buttons-instance"
                divClassName="instance-node"
                property1="operation-default"
                text="*"
              />
            </div>
            <div className="frame-2">
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-4"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="default"
                text="4"
              />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="5" />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="6" />
              <Buttons
                className="buttons-instance"
                divClassName="instance-node"
                property1="operation-default"
                text="-"
              />
            </div>
            <div className="frame-2">
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="1" />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="2" />
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-4"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="default"
                text="3"
              />
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-5"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="operation-default"
                text="+"
              />
            </div>
            <div className="frame-2">
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-6"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="default"
                text="+/-"
              />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="0" />
              <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="." />
              <Buttons
                className="buttons-instance"
                divClassName={`${screenWidth < 796 && "class-5"} ${
                  screenWidth >= 796 && screenWidth < 1138 && "instance-node"
                }`}
                property1="primary-default"
                text="="
              />
            </div>
          </div>
          <IconButton
            className="icon-button-instance"
            icon={<IcTwotoneHistory2 className="instance-node-2" />}
            property1="clear-default"
          />
        </div>
      )}

      {((screenWidth >= 1138 && screenWidth < 1254) ||
        (screenWidth >= 1254 && screenWidth < 1440) ||
        screenWidth >= 1440) && (
        <>
          <div
            className="frame-3"
            style={{
              flex: screenWidth >= 1254 && screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth >= 1254 && screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1138 && screenWidth < 1254 ? "764px" : screenWidth >= 1440 ? "974px" : undefined,
            }}
          >
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper">79+3=</div>
              </div>
              <div className="result">
                <div className="text-wrapper-2">82</div>
              </div>
            </div>
            <div className="commands">
              <div className="frame-2">
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="%"
                />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="CE"
                />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="C"
                />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="/"
                />
              </div>
              <div className="frame-2">
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="7" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="8" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="9" />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="*"
                />
              </div>
              <div className="frame-2">
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="4" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="5" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="6" />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="-"
                />
              </div>
              <div className="frame-2">
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="1" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="2" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="3" />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="operation-default"
                  text="+"
                />
              </div>
              <div className="frame-2">
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="+/-" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="0" />
                <Buttons className="buttons-instance" divClassName="instance-node" property1="default" text="." />
                <Buttons
                  className="buttons-instance"
                  divClassName="instance-node"
                  property1="primary-default"
                  text="="
                />
              </div>
            </div>
          </div>
          <div
            className="frame-4"
            style={{
              flex: screenWidth >= 1138 && screenWidth < 1254 ? "1" : undefined,
              flexGrow: screenWidth >= 1138 && screenWidth < 1254 ? "1" : undefined,
              width: (screenWidth >= 1254 && screenWidth < 1440) || screenWidth >= 1440 ? "386px" : undefined,
            }}
          >
            <div className="div-wrapper">
              <div className="text-wrapper-3">History</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-4">79 + 3 =</div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-5">82</div>
                </div>
              </div>
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-4">0 =</div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-5">0</div>
                </div>
              </div>
            </div>
            <IconButton
              className={`${screenWidth >= 1138 && screenWidth < 1254 && "class-7"} ${
                ((screenWidth >= 1254 && screenWidth < 1440) || screenWidth >= 1440) && "class-8"
              }`}
              icon={<OcticonTrash244 className="instance-node-2" />}
              property1="clear-default"
            />
          </div>
        </>
      )}
    </div>
  );
};
