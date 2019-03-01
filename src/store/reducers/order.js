import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const order = {
        ...action.orderData,
        orderId: action.orderId
      };
      return {
        ...state,
        orders: state.orders.concat(order),
        loading: false
      };
    case actionTypes.PURCHASE_BURGER_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
