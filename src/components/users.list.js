import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./users.list.style.js";
import { getUserList } from "../actions";

/**
 * @description - Renders the user list component.
 * @returns {Node} - Returns html.
 */
class UserList extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @description - Lifecycle hook.
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserList());
  }

  /**
   * @description - Handles the click func of user.
   * @param {Number} id - ID value of user. 
   */
  handleRoute = (id) => {
    const { history } = this.props;
    history.push(`/user/${id}`);
  };

  /**
   * @description - Renders the user list page.
   * @returns {Node} - Returns html.
   */
  render() {
    const { classes, userData } = this.props;
    let userInfo =
      userData.data.length !== 0
        ? userData.data.map((item) => ({
            id: item[0],
            fname: item[1],
            lname: item[2],
            email: item[3],
            gender: item[4],
            phone: item[5],
          }))
        : [];
    userInfo = userInfo.filter(item => !isNaN(Number(item.id)) && item.id !== "");
    console.log(userInfo);
    return (
      <Fragment>
        <div className={classes.container}>
          <h1 style={{ margin: "50px" }}>Users List</h1>
          <table className={classes.tblDiv}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
              </tr>
            </thead>
            {userInfo.map((value, index) => (
              <tbody key={index} onClick={() => this.handleRoute(value.id)}>
                <tr>
                  <td>{value.id}</td>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  <td>{value.phone}</td>
                </tr>
              </tbody>
            ))}
          </table>
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

UserList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

UserList.defaultProps = {};

export default injectSheet(styles)(
  withRouter(connect(mapStateToProps)(UserList))
);
