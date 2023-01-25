import React, { useContext } from "react";
import { SiDpd } from "react-icons/si";
import { DrawerContext } from "./DrawerContext";

export default function Brand({ openLevel }) {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;

  const brandBaseClassList = [
    "flex",
    "items-center",
    "text-xl",
    "h-8",
    "hover:opacity-75",
    "transition-all",
    "duration-500",
  ];
  const brandClassList = () => {
    let classList = [...brandBaseClassList, "px-2"];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...brandBaseClassList, "flex-row-reverse", "px-0"];
    }

    return classList;
  };

  const logoBaseClassList = [];
  const logoClassList = () => {
    let classList = [...logoBaseClassList, "mr-2"];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...logoBaseClassList, "flex", "justify-center", "w-12"];
    }

    return classList;
  };

  const titleBaseClassList = ["transition-all", "duration-500"];
  const titleClassList = () => {
    let classList = [...titleBaseClassList, "opacity-100"];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...titleBaseClassList, "opacity-0"];
    }

    return classList;
  };

  const brandClassName = brandClassList().join(" ");
  const logoClassName = logoClassList().join(" ");
  const titleClassName = titleClassList().join(" ");

  return (
    <a href="/" className={brandClassName} title="WebYard">
      <span className={logoClassName}>
        <SiDpd />
      </span>
      <span className={titleClassName}>WebYard</span>
    </a>
  );
}
