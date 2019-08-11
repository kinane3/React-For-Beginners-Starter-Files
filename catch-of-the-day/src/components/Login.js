import React from "react";
import Proptypes from "prop-types";

const Login = () => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory</p>
    <button
      className="facebook"
      onClick={() => this.props.authenticate("Facebook")}
    >
      Login with Facebook
    </button>
  </nav>
);

Login.prototype = {
    authenticate: Proptypes.func.isRequire
}

export default Login;
