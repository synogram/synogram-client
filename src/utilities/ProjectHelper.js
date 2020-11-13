import { UI_NAVBAR_ITEM, UI_PROPERTIES } from "../constants/Constants";
import messages from "../constants/Messages";

const NAV_BAR_ITEMS = {
  [UI_NAVBAR_ITEM.HOME]: {
    [UI_PROPERTIES.TITLE]: messages.home,
  },
  [UI_NAVBAR_ITEM.ABOUT]: {
    [UI_PROPERTIES.TITLE]: messages.about,
  },
};

export function getNavbarPropertyUsingKey(key, property) {
  return NAV_BAR_ITEMS[key][property];
}
