import Erin from "./erin.jpg";
import Jeongwon from "./jeongwon.jpg";
import Junseo from "./junseo.jpg";
import Ewhan from "./ewhan.jpg";
import Matt from "./matt.jpg";
import {members} from "../../../constants/Profiles";

const getProfileImage = (profileName) => {
  switch (profileName) {
    case members.JEONGWON:
      return Jeongwon;
    case members.JUNSEO:
      return Junseo;
    case members.EWHAN:
      return Ewhan;
    case members.MATT:
      return Matt;
    case members.ERIN:
      return Erin;
  }
};

export default getProfileImage;
