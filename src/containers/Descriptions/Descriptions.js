import React, { Component } from "react";
import styles from "./Descriptions.module.scss";

import DescriptionButtons from "../Descriptions/DescriptionButtons/DescriptionButtons.js";
import UpChevron from "../../assets/icons/descriptionModalUpChevron.svg";

const TESTWORDS = [
  "aug",
  "aquamarine",
  "tracheae",
  "fro",
  "runlet",
  "mouthpiece",
  "heterophyte",
  "nonsuppositive",
  "retaker",
  "craunch",
  "preready",
  "yeastless",
  "gulllike",
  "nonsystematic",
  "voodooing",
  "bluebonnet",
  "gunkholed",
  "decretory",
  "listerising",
  "reassurance",
];

class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToView = () => {
    this.myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const WORD_LIST =
      TESTWORDS !== undefined || TESTWORDS !== null ? [...TESTWORDS] : []; //TESTWORDS is a place holder for the incoming word list array

    return (
      <div className={styles.mainDescriptionBox} ref={this.myRef}>
        <button
          id={"Description_Modal"}
          className={styles.mainDescriptionExpandBtn}
          onClick={this.scrollToView}
        >
          <img src={UpChevron} alt="^"></img>
        </button>
        <div className={styles.wordList}>
          <DescriptionButtons wordListArr={WORD_LIST} />
        </div>
        <div className={styles.mainDescriptionItem}>
          <h1>Test title</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default Descriptions;
