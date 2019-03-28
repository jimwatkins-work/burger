import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as orderActions from "../../store/actions/order";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          date={order.date}
          totalPrice={order.price}
          ingredients={order.ingredients}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(orderActions.fetchOrders(token, userId)),
    onFetchOrdersStart: () => dispatch(orderActions.fetchOrdersStart()),
    onFetchOrdersSuccess: () => dispatch(orderActions.fetchOrdersSuccess()),
    onFetchOrdersFail: () => dispatch(orderActions.fetchOrdersFail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
