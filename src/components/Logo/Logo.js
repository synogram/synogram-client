import React from 'react'
import synogramIcon from "../../assets/icons/synogramIcon.svg";
import styles from "./Logo.module.scss"
const Logo = (props) => {

    const extraStyles = props.styles ? props.styles : null;

    return (
        <div className={[styles.Logo, extraStyles].join(" ")} onClick = {props.returnHome ? props.returnHome : undefined}>
            <h1>
                <span>SYN
                    <img
                        src={synogramIcon}
                        className={styles.synogramIcon}
                        alt={"synogram icon"}
                    ></img>
              GRAM</span>
              
            </h1>
          </div>
    )
}

export default Logo;