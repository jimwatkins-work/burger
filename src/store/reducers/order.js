import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseBurgerInit = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
  const order = updateObject(action.orderData, { orderId: action.orderId });
  return updateObject(state, {
    orders: state.orders.concat(order),
    loading: false,
    purchased: true
  });
};

const purchaseBurgerFailure = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_INIT:
      return purchaseBurgerInit(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAILURE:
      return purchaseBurgerFailure(state, action);
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail;
    default:
      return state;
  }
};

export default reducer;
