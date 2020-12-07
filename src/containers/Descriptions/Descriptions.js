import React, { Component } from "react";
import styles from "./Descriptions.module.scss";

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
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  scrollToView = () => {
    console.log(this.myRef);
    this.myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const randomWords = TESTWORDS.map((word, index) => {
      let style = {};
      if (index < 3) {
        style = { backgroundColor: "#FD5D08" };
      } else if (index < 6) {
        style = { backgroundColor: "#FE9B08" };
      } else if (index < 9) {
        style = { backgroundColor: "#FFD908" };
      } else {
        style = { backgroundColor: "#FFFCEB" };
      }
      return <button style={style}>{word}</button>;
    });
    return (
      <div className={styles.mainDescriptionBox} ref={this.myRef}>
        <button
          id={"Description_Modal"}
          className={styles.mainDescriptionExpandBtn}
          onClick={this.scrollToView}
        >
          +
        </button>
        <div className={styles.wordList}>{randomWords.slice(0, 10)}</div>
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
