import {PROFILE} from "./Constants.js";

export const members = {
  JEONGWON: "JEONGWON",
  JUNSEO: "JUNSEO",
  MATT: "MATT",
  EWHAN: "EWHAN",
  ERIN: "ERIN",
};

export const Profiles = {
  [members.JEONGWON]: {
    [PROFILE.NAME]: "Jeongwon Song",
    [PROFILE.EMAIL]: "jsong336@uwo.ca",
    [PROFILE.GITHUB]: "https://github.com/jsong336",
    [PROFILE.LINKEDIN]: "https://www.linkedin.com/in/jeongwonsong",
    [PROFILE.DESCRIPTION]: "Project Manager, Backend Manager",
  },
  [members.JUNSEO]: {
    [PROFILE.NAME]: "Junseo Hwang",
    [PROFILE.EMAIL]: "jun_hwang560@hotmail.com",
    [PROFILE.GITHUB]: "https://github.com/jhwan7",
    [PROFILE.LINKEDIN]: "https://www.linkedin.com/in/junseo-hwang",
    [PROFILE.DESCRIPTION]: "Project Manager, Frontend Manager",
  },
  [members.MATT]: {
    [PROFILE.NAME]: "Mathieu Girard",
    [PROFILE.EMAIL]: "mathieu.m.girard@gmail.com",
    [PROFILE.GITHUB]: "https://github.com/MathieuGirard19",
    [PROFILE.LINKEDIN]: "https://www.linkedin.com/in/mathieugirard1997/",
    [PROFILE.DESCRIPTION]: "Backend Developer",
  },
  [members.EWHAN]: {
    [PROFILE.NAME]: "Ewhan Han",
    [PROFILE.EMAIL]: "",
    [PROFILE.GITHUB]: "https://github.com/EwhanHan",
    [PROFILE.LINKEDIN]: "https://www.linkedin.com/in/ewhanhan/",
    [PROFILE.DESCRIPTION]: "Frontend Developer",
  },
  [members.ERIN]: {
    [PROFILE.NAME]: "Erin Ha",
    [PROFILE.EMAIL]: "erinhayerin@gmail.com",
    [PROFILE.GITHUB]: "",
    [PROFILE.LINKEDIN]: "https://www.linkedin.com/in/erin-ha/",
    [PROFILE.DESCRIPTION]: "UI/UX Designer",
  },
};

export default Profiles;
