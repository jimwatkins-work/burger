import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactInfo from "../Checkout/ContactInfo/ContactInfo";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  componentWillMount() {
    this.props.onInitPurchase();
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-info");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.url + "/contact-info"}
            component={ContactInfo}
          />
        </>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
