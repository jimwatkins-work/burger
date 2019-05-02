import * as actions from "./auth";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to start authentication", () => {
    expect(actions.authStart()).toEqual({
      type: types.AUTH_START,
      loading: true
    });
  });

  it("should create an action on successful authentication", () => {
    const idToken = "some-id-token";
    const userId = "some-user-id";
    expect(actions.authSuccess(idToken, userId)).toEqual({
      type: types.AUTH_SUCCESS,
      idToken: idToken,
      userId: userId
    });
  });

  it("should create an action on authentication failure", () => {
    const error = "some-error";
    expect(actions.authFailure(error)).toEqual({
      type: types.AUTH_FAILURE,
      error: error
    });
  });

  it("should create an action on logout", () => {
    expect(actions.logout()).toEqual({
      type: types.LOGOUT
    });
  });

  it("should create an action on setting authentication redirect path", () => {
    const path = "some-path";
    expect(actions.setAuthRedirectPath(path)).toEqual({
      type: types.SET_AUTH_REDIRECT_PATH,
      path: path
    });
  });
});
