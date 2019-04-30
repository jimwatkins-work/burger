import reducer from "./order";
import * as actionTypes from "../actions/actionTypes";

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      orders: [],
      loading: false,
      purchased: false
    });
  });

  it("should change loading status to true when fetching orders", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false
        },
        {
          type: actionTypes.FETCH_ORDERS_START
        }
      )
    ).toEqual({
      orders: [],
      loading: true,
      purchased: false
    });
  });

  it("should change loading status to false when fetching orders has failed", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: true,
          purchased: false
        },
        {
          type: actionTypes.FETCH_ORDERS_FAIL,
          error: "some-error"
        }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false,
      error: "some-error"
    });
  });

  it("should return orders when fetching orders is successful", () => {
    expect(
      reducer(
        {
          orders: [
            {
              orderId: "some-order-id"
            }
          ],
          loading: true,
          purchased: false
        },
        {
          type: actionTypes.FETCH_ORDERS_SUCCESS,
          orders: [
            {
              orderId: "some-order-id"
            }
          ]
        }
      )
    ).toEqual({
      orders: [
        {
          orderId: "some-order-id"
        }
      ],
      loading: false,
      purchased: false
    });
  });

  it("should change loading status to true when it has initialized order purchase", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false
        },
        {
          type: actionTypes.PURCHASE_BURGER_INIT,
          loading: true
        }
      )
    ).toEqual({
      orders: [],
      loading: true,
      purchased: false
    });
  });

  it("should change purchase status to true when purchase is successful", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false
        },
        {
          type: actionTypes.PURCHASE_BURGER_SUCCESS,
          orderId: "some-order-id",
          orders: [
            {
              orderId: "some-order-id"
            }
          ]
        }
      )
    ).toEqual({
      orders: [
        {
          orderId: "some-order-id"
        }
      ],
      loading: false,
      purchased: true
    });
  });

  it("should ensure purchase status is false when initializing order", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: true
        },
        {
          type: actionTypes.PURCHASE_INIT
        }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false
    });
  });

  it("should return error when purchase has failed", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false
        },
        {
          type: actionTypes.PURCHASE_BURGER_FAILURE,
          error: "some-error"
        }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false,
      error: "some-error"
    });
  });
});
