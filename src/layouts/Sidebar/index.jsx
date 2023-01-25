import React, { useState, useContext } from "react";
import pages from "../../../pages.config";
import { DrawerContext } from "./DrawerContext";
import DrawerToggle from "./DrawerToggle";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";
import NavList from "./NavList";
import NavItem from "./NavItem";
import Brand from "./Brand";

export default function Sidebar() {
  const context = useContext(DrawerContext);
  const openLevels = context.openLevels;
  const [openLevel, setOpenLevel] = useState(context.defaultOpenLevel);

  const handleToggle = (action) => {
    if (
      action === "push" &&
      (openLevel === openLevels.less || openLevel === openLevels.full)
    ) {
      setOpenLevel(openLevel - 1);
    }
    if (
      action === "pull" &&
      (openLevel === openLevels.less || openLevel === openLevels.none)
    ) {
      setOpenLevel(openLevel + 1);
    }
  };

  const navItems = pages.map((page) => {
    return <NavItem key={page.id} openLevel={openLevel} link={page} />;
  });

  return (
    <aside className="flex flex-col relative">
      <DrawerContext.Provider value={context}>
        <Drawer openLevel={openLevel}>
          <Brand openLevel={openLevel} />
          <NavMenu openLevel={openLevel}>
            <NavList>{navItems}</NavList>
          </NavMenu>
        </Drawer>
        <DrawerToggle openLevel={openLevel} onToggle={handleToggle} />
      </DrawerContext.Provider>
    </aside>
  );
}
