import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./users.detail.style.js";
import { getUserList } from "../actions";

/**
 * @description - Renders the user detail component.
 * @returns {Node} - Returns html.
 */
class UserDetail extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  /**
   * @description - Lifecycle hook.
   */
  componentDidMount() {
    const { match, dispatch } = this.props;
    const userid = match.params.id;
    this.setState({
      id: userid,
    });
    dispatch(getUserList());
  }

  /**
   * @description - Handles the back action.
   */
  handleBack = () => {
    const { history } = this.props;
    history.push("/home");
  };

  /**
   * @description - Renders the user detail page.
   * @returns {Node} - Returns html.
   */
  render() {
    const { id } = this.state;
    const { classes, userData } = this.props;
    const userInfo = userData.data.find((item) => item.id === id);
    return (
      <Fragment>
        <div className={classes.container}>
          {userInfo !== undefined ? (
            <div>
              <h1 style={{ margin: "50px" }}>
                {userInfo.fname} {userInfo.lname}
              </h1>
              <div>Email: {userInfo.email}</div>
              <div>Gender: {userInfo.gender}</div>
              <div>Phone: {userInfo.phone}</div>
            </div>
          ) : null}
          <button
            className={classes.btnDiv}
            type="button"
            onClick={this.handleBack}
          >
            Go Back
          </button>
        </div>
      </Fragment>
    );
  }
}

/**
 * @description Map all form state to props.
 * @param {Object} state - State.
 * @returns {Object} - Props.
 */
function mapStateToProps(state) {
  return {
    userData: state.userListReducer,
  };
}

UserDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

UserDetail.defaultProps = {};

export default injectSheet(styles)(
  withRouter(connect(mapStateToProps)(UserDetail))
);
