import React from "react";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages from "../../../constants/Messages";
import NavBar from "../../../components/NavBar/Navbar";
import {connect} from "react-redux";
import {RESET_REDUX_STATE} from "../../../store/actions/actionTypes";
import Logo from "../../../components/Logo/Logo";

class LandingPage extends React.Component {
  state = {
    scrollbarVisible: false,
  };

  magnifyGlassId = "Magnifying_Glass";

  componentDidMount() {
    if (
      this.getElementById(this.magnifyGlassId).clientHeight >document.body.clientHeight || document.body.scrollHeight > document.body.clientHeight
    ) {
      this.setState({scrollbarVisible: true});
    }

    // If you return to the landingPage. The redux state has to reset.
    this.props.resetRedux();
  }
  getElementById = (id) => {
    try {
      return document.getElementById(id);
    } catch (error) {
      console.log("Element not found: " + error);
    }
  };

  render() {
    // takes into account background not covering absolute positioned item
    const extendBackground = this.state.scrollbarVisible
      ? {
          minHeight:
            Math.max(
              this.getElementById(this.magnifyGlassId).clientHeight,
              document.body.scrollHeight
            ) + "px",
        }
      : {};

    return (
      <div className={styles.landingPage} style={extendBackground}>
        <div id={this.magnifyGlassId} className={styles.magnifyGlass}>
          <div className={styles.outerGlass} />
          <div className={styles.innerGlass} />
          <div className={styles.glassHandle} />
        </div>

        <div className={styles.content}>
          <NavBar className={styles.landingPageNavbar} />
          <Logo />
          <SearchBar isSmall={false} />
          <div className={styles.landingPageDescription}>
            <p>{messages.landingPageDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetRedux: () => dispatch({type: RESET_REDUX_STATE}),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
