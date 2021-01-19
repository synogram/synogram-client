import React, {Component} from "react";
import styles from "./Descriptions.module.scss";

import DescriptionWordListBtns from "./DescriptionWordListBtns/DescriptionButtons.js";
import DescriptionWordInfo from "./DescriptionWordInfo/DescriptionWordInfo.js";
import UpChevron from "../../assets/icons/descriptionModalUpChevron.svg";
import {connect} from "react-redux";

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
    this.scrollToView = this.scrollToView.bind(this);
    this.state = {
      isWordListClicked: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.flipImage = this.flipImage.bind(this);
  }

  scrollToView() {
    this.myRef.current.scrollIntoView({behavior: "smooth"});
  }

  buttonHandler() {
    this.setState((state) => ({
      isWordListClicked: !state.isWordListClicked,
    }));
    this.scrollToView();
  }

  flipImage() {
    return this.state.isWordListClicked ? {transform: "rotate(180deg)"} : null;
  }

  render() {
    const WORD_LIST =
      this.props.relatedWords !== undefined || this.props.relatedWords !== null
        ? [...this.props.relatedWords]
        : []; //TESTWORDS is a place holder for the incoming word list array

    return (
      <div className={styles.mainDescriptionBox} ref={this.myRef}>
        <button
          id={"Description_Modal"}
          className={styles.mainDescriptionExpandBtn}
          onClick={this.buttonHandler}
        >
          <img src={UpChevron} alt="^" style={this.flipImage()}></img>
        </button>
        {this.state.isWordListClicked && (
          <div className={styles.collapsibleContent}>
            <div className={styles.wordList}>
              <DescriptionWordListBtns wordListArr={WORD_LIST} />
            </div>
            <div className={styles.mainDescriptionItem}>
              <DescriptionWordInfo />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWords: state.related.relatedWords,
  };
};

export default connect(mapStateToProps)(Descriptions);
