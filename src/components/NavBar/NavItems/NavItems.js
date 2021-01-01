import React from "react";
import styles from "./NavItems.module.scss";
import {Link} from "react-router-dom";
import {getNavbarPropertyUsingKey} from "../../../utilities/ProjectHelper";
import {UI_NAVBAR_ITEM, UI_PROPERTIES} from "../../../constants/Constants";

const NavItems = (props) => {
  const supportedTabs = props.supportedTabs;

  const generateRouteForTabs = (type) => {
    switch (type) {
      case UI_NAVBAR_ITEM.HOME:
        return "/";
      case UI_NAVBAR_ITEM.ABOUT:
        return "/" + type;
    }
  };
  const generateNavItem = () => {
    let supportedTabCopy = [...supportedTabs];
    supportedTabCopy = supportedTabCopy.map((type, index) => {
      return (
        <li className={styles.navItems} key={index + type}>
          <Link to={generateRouteForTabs(type)}>
            {getNavbarPropertyUsingKey(type, UI_PROPERTIES.TITLE)}
          </Link>
        </li>
      );
    });
    return supportedTabCopy;
  };

  return <ul className={styles.navBar}>{generateNavItem()}</ul>;
};

export default NavItems;
