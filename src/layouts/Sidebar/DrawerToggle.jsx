import React, { useContext } from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { DrawerContext } from "./DrawerContext";

export default function DrawerToggle({ openLevel, onToggle }) {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;

  const buttonsGroupBaseClassList = [
    "flex",
    "justify-end",
    "items-center",
    "group",
    "transition-all",
    "duration-500",
    "w-8",
    "absolute",
    "-right-8",
  ];
  const buttonsGroupClassList = () => {
    let classList = [...buttonsGroupBaseClassList];

    if (openLevel === openLevels.less) {
      classList = [...buttonsGroupBaseClassList, "hover:w-16", "-right-8"];
    }

    return classList;
  };

  const buttonBaseClassList = [
    "h-8",
    "w-8",
    "flex",
    "justify-center",
    "items-center",
    "transition-all",
    "duration-500",
    "text-2xl",
    "z-10",
    "bg-orange-700",
    "hover:bg-orange-800",
  ];
  const buttonClassList = (action) => {
    let classList = [...buttonBaseClassList];

    if (action === "push" && openLevel === openLevels.none) {
      classList = [...buttonBaseClassList, "hidden"];
    }
    if (action === "push" && openLevel === openLevels.less) {
      classList = [
        ...buttonBaseClassList,
        "z-0",
        "absolute",
        "left-0",
        "group-hover:flex",
      ];
    }
    if (action === "pull" && openLevel === openLevels.full) {
      classList = [...buttonBaseClassList, "hidden"];
    }

    return classList;
  };

  const buttonsGroupClassName = buttonsGroupClassList().join(" ");
  const buttonPusherClassName = buttonClassList("push").join(" ");
  const buttonPullerClassName = buttonClassList("pull").join(" ");

  return (
    <div className={buttonsGroupClassName}>
      <button
        type="button"
        className={buttonPusherClassName}
        onClick={() => onToggle("push")}
        title="收縮"
      >
        <RiMenuFoldFill />
      </button>
      <button
        type="button"
        className={buttonPullerClassName}
        onClick={() => onToggle("pull")}
        title="展開"
      >
        <RiMenuUnfoldFill />
      </button>
    </div>
  );
}
