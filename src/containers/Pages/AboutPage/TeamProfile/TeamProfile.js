import Profiles from "../../../../constants/Profiles.js";
import styles from "./TeamProfile.module.scss";

import TeamProfileLinks from "./TeamProfileLinks/TeamProfileLinks.js";

import React from "react";

const teamProfile = () => {
  const TEAM = Profiles.map((teamMember, index) => {
    return (
      <React.Fragment>
        <div className={styles.teamProfile}>
          <div
            className={styles.magnifyGlassContainer}
            key={teamMember.name + index}
          >
            <div className={styles.magnifyGlass}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="test"
                className={styles.imgAvatar}
              ></img>
              <TeamProfileLinks />
              <div className={styles.magnifyGlassHandle}></div>
            </div>
          </div>
          <div className={styles.teamMemberInfo}>
            <h4>{teamMember.name}</h4>
            <p>{teamMember.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className={styles.team}>{TEAM}</div>;
};

export default teamProfile;
