import profiles from "../../constants/Profiles.js";
import styles from "./TeamProfile.module.scss";

import TeamProfileLinks from "./TeamProfileLinks/TeamProfileLinks.js";

import React from "react";
import {PROFILE} from "../../constants/Constants.js";

const teamProfile = () => {
  const profilesClone = {...profiles};
  const TEAM = Object.keys(profilesClone).map((teamMember, index) => {
    return (
      <div
        className={styles.teamProfile}
        key={profiles[teamMember][PROFILE.NAME] + index}
      >
        <div className={styles.magnifyGlassContainer}>
          <div className={styles.magnifyGlass}>
            <img
              src={profiles[teamMember][PROFILE.IMAGE]}
              alt={`${profiles[teamMember][PROFILE.NAME]} picture`}
              className={styles.imgAvatar}
            ></img>
            <TeamProfileLinks />
            <div className={styles.magnifyGlassHandle}></div>
          </div>
        </div>
        <div className={styles.teamMemberInfo}>
          <h4>{profiles[teamMember][PROFILE.NAME]}</h4>
          <p>{profiles[teamMember][PROFILE.DESCRIPTION]}</p>
        </div>
      </div>
    );
  });

  return <div className={styles.team}>{TEAM}</div>;
};

export default teamProfile;
