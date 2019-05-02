import * as actions from "./order";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action on successful burger purchase", () => {
    const id = "some-id";
    const orderData = "some-orderData";
    expect(actions.purchaseBurgerSuccess(id, orderData)).toEqual({
      type: types.PURCHASE_BURGER_SUCCESS,
      orderId: id,
      orderData: orderData
    });
  });

  it("should create an action on failed burger purchase", () => {
    const error = "some-error";
    expect(actions.purchaseBurgerFailure(error)).toEqual({
      type: types.PURCHASE_BURGER_FAILURE,
      error: error
    });
  });

  it("should create an action on burger purchase initialization", () => {
    expect(actions.purchaseBurgerInit()).toEqual({
      type: types.PURCHASE_BURGER_INIT
    });
  });

  it("should create an action on purchase initialization", () => {
    expect(actions.purchaseInit()).toEqual({
      type: types.PURCHASE_INIT
    });
  });

  it("should create an action on successful fetching of orders", () => {
    const orders = "some-orders";
    expect(actions.fetchOrdersSuccess(orders)).toEqual({
      type: types.FETCH_ORDERS_SUCCESS,
      orders: orders
    });
  });

  it("should create an action on failure to fetching orders", () => {
    const error = "some-error";
    expect(actions.fetchOrdersFail(error)).toEqual({
      type: types.FETCH_ORDERS_FAIL,
      error: error
    });
  });

  it("should create an action on starting to fetch orders", () => {
    expect(actions.fetchOrdersStart()).toEqual({
      type: types.FETCH_ORDERS_START
    });
  });
});
