import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import {Constants} from "../../../../flux";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleLogout() {
    window.sessionStorage.clear()
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          {/*TODO: user name undefined*/}
          <span className="d-none d-md-inline-block">
            {/*{window.sessionStorage.getItem("user_name")}*/}
            {
              window.sessionStorage.getItem("user_name") === "undefined" ?
              "Admin" : window.sessionStorage.getItem("user_name")
            }
          </span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          {
            window.sessionStorage.getItem("user_name") === "undefined" ?
              null
              :
              <DropdownItem tag={Link} to={{
                pathname: "/user-profile-root",
                state: {userType: Constants.USER, userID: window.sessionStorage.getItem("user_id")}
              }}>
                <i className="material-icons">&#xE7FD;</i> User Profile
              </DropdownItem>
          }

          {/*<DropdownItem tag={Link} to="edit-user-profile">*/}
          {/*  <i className="material-icons">&#xE8B8;</i> Edit Profile*/}
          {/*</DropdownItem>*/}
          {/* <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/sign-in" className="text-danger" onClick={this.handleLogout}>
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
