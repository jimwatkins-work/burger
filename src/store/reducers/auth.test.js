import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should change loading status to true when attempting login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_START
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true,
      authRedirectPath: "/"
    });
  });

  it("should store the token and userId upon successful login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-user-id"
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should set redirect path", () => {
    expect(
      reducer(
        {
          token: "some-token",
          userId: "some-user-id",
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.SET_AUTH_REDIRECT_PATH,
          path: "/some-path"
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/some-path"
    });
  });

  it("should return error upon failed login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_FAILURE,
          error: "some-error"
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: "some-error",
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should remove token and user id upon logout", () => {
    expect(
      reducer(
        {
          token: "some-token",
          userId: "some-user-id",
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.LOGOUT
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
