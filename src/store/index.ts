import { createStore, applyMiddleware, Store } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { State as NotificationState } from "./notificationReducer";

export type GlobalState = {
  notification: NotificationState;
};

export const INITIAL_STATE = {
  notification: {
    notifications: [],
  },
};

const loggerMiddleware = createLogger();

export default function configureStore(initialState = INITIAL_STATE): Store {
  return createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(thunk)
      : applyMiddleware(thunk, loggerMiddleware)
  );
}
