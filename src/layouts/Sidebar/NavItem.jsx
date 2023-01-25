import React, { useContext } from "react";
import { DrawerContext } from "./DrawerContext";
import NavIcon from "./NavIcon";

export default function NavItem({ openLevel, link, target = "frame" }) {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;

  const navLinkBaseClassList = [
    "py-1",
    "flex",
    "items-center",
    "hover:opacity-75",
    "transition-all",
    "duration-500",
  ];
  const navLinkClassList = () => {
    let classList = [...navLinkBaseClassList];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...navLinkBaseClassList, "flex-row-reverse"];
    }

    return classList;
  };

  const navIconBaseClassList = [];
  const navIconClassList = () => {
    let classList = [...navIconBaseClassList, "mr-3"];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...navIconBaseClassList, "flex", "justify-center", "w-12"];
    }

    return classList;
  };

  const linkTextBaseClassList = ["transition-all", "duration-500"];
  const navTextClassList = () => {
    let classList = [...linkTextBaseClassList, "opacity-100"];

    if (openLevel === openLevels.none || openLevel === openLevels.less) {
      classList = [...linkTextBaseClassList, "opacity-0"];
    }

    return classList;
  };

  const navLinkClassName = navLinkClassList().join(" ");
  const navIconClassName = navIconClassList().join(" ");
  const navTextClassName = navTextClassList().join(" ");

  return (
    <li>
      <a
        href={link.path}
        target={target}
        className={navLinkClassName}
        title={link.title}
      >
        <span className={navIconClassName}>
          <NavIcon id={link.id} />
        </span>
        <span className={navTextClassName}>{link.title}</span>
      </a>
    </li>
  );
}
