import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, withRouter } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/auth";
import Logout from "./containers/Auth/Logout/logout";
import { connect } from "react-redux";
import * as authActions from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/signin" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(authActions.authCheckStatus())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
