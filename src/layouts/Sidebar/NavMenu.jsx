import React, { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export default function NavMenu({ openLevel, children }) {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;

  const navMenuBaseClassList = [
    "overflow-x-hidden",
    "overflow-y-auto",
    "flex-grow",
    "py-2",
  ];
  const navMenuClassList = () => {
    let classList = [...navMenuBaseClassList];

    if (openLevel === openLevels.full) {
      classList = [...navMenuBaseClassList, "px-2"];
    }

    return classList;
  };

  const navMenuClassName = navMenuClassList().join(" ");

  return <div className={navMenuClassName}>{children}</div>;
}
