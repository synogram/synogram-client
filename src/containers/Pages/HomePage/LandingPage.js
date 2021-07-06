import React from "react";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages from "../../../constants/Messages";
import NavBar from "../../../components/NavBar/Navbar";
import {connect} from "react-redux";
import {RESET_REDUX_STATE} from "../../../store/actions/actionTypes";
import Logo from "../../../components/Logo/Logo";
import Notification from "../../../components/Notification/Notification";

class LandingPage extends React.Component {
  magnifyGlassId = "Magnifying_Glass";

  componentDidMount() {
    // If you return to the landingPage. The redux state has to reset.
    this.props.resetRedux();
  }

  render() {
    return (
      <div className={styles.landingPage}>
        <Notification text={messages.offlineServerDefault}></Notification>
        <div className={styles.content}>
          <NavBar className={styles.landingPageNavbar} />
          <Logo />
          <SearchBar isSmall={false} />
          <div className={styles.landingPageDescription}>
            <p>{messages.landingPageDescription}</p>
          </div>
        </div>
        <div id={this.magnifyGlassId} className={styles.magnifyGlass}>
          <div className={styles.outerGlass} />
          <div className={styles.innerGlass} />
          <div className={styles.glassHandle} />
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
