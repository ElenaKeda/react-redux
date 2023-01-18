import { call, put, takeEvery } from "@redux-saga/core/effects";
import { hideLoader, showLoader, showWarningMessage } from "./actions";
import { FETCH_POST, REQUEST_POSTS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());

    const payload = yield call(fetchedPosts);

    yield put({ type: FETCH_POST, payload });
  } catch (e) {
    yield put(showWarningMessage("Something went wrong!"));
  } finally {
    yield put(hideLoader());
  }
}

async function fetchedPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
