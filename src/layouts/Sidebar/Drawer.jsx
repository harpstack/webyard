import React, { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export default function Drawer({ openLevel, children }) {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;

  const drawBaseClassList = [
    "w-36",
    "h-full",
    "overflow-hidden",
    "flex",
    "flex-col",
    "transition-all",
    "duration-500",
  ];
  const drawClassList = () => {
    let classList = [...drawBaseClassList];

    if (openLevel === openLevels.less) {
      classList = [...drawBaseClassList, "-ml-24"];
    }
    if (openLevel === openLevels.none) {
      classList = [...drawBaseClassList, "-ml-36"];
    }

    return classList;
  };

  const drawClassName = drawClassList().join(" ");

  return <div className={drawClassName}>{children}</div>;
}
