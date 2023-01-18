import {
  CREATE_POST,
  FETCH_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return { type: CREATE_POST, payload: post };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showWarningMessage(message) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });

    setTimeout(() => dispatch(hideWarningMessage()), 2000);
  };
}

export function hideWarningMessage() {
  return { type: HIDE_ALERT };
}

export function fetchPost() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();

      dispatch({ type: FETCH_POST, payload: json });
    } catch (e) {
      dispatch(showWarningMessage("Something went wrong!"));
    } finally {
      dispatch(hideLoader());
    }
  };
}
