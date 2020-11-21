import React from "react";
import { UI_NAVBAR_ITEM } from "../../constants/Constants";
import styles from "./Navbar.module.scss";
import NavItems from "./NavItems/NavItems";

const NavBar = (props) => {
  const supportedNavItem = [UI_NAVBAR_ITEM.HOME, UI_NAVBAR_ITEM.ABOUT];

  const passedStyles = props.className ? props.className : "";
  return (
    <header className={[styles.navContainer, passedStyles].join(" ")}>
      <NavItems supportedTabs={supportedNavItem} />
    </header>
  );
};

export default NavBar;
