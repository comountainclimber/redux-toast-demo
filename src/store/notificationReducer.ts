import { SHOW_NOTIFICATION, REMOVE_NOTIFICATION } from "./notificationActions";
import { AnyAction } from "redux";

export type NotificationType = {
  message: string;
  id: string | number;
};

export type State = {
  notifications: NotificationType[];
};

export default (
  state: State = {
    notifications: [],
  },
  action: AnyAction
): State => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.notification],
      });
    case REMOVE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [
          ...state.notifications.filter((n) => n.id !== action.id),
        ],
      });
    default:
      return state;
  }
};
