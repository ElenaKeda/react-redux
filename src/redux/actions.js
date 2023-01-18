import {
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
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
  return { type: REQUEST_POSTS };
}
