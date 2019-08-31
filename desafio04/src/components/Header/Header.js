import React, { Component } from "react";

import "./Header.css";
import facebookLogo from "../../assets/facebook-logo.png";
import accountCircle from "../../assets/account-circle.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={facebookLogo} alt="" />
        <div className="profile">
          <h1>Meu perfil</h1>
          <img src={accountCircle} alt="Account profile" />
        </div>
      </div>
    );
  }
}

export default Header;
