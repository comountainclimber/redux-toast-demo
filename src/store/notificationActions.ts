import { Dispatch } from "redux";
import { NotificationType } from "./notificationReducer";

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const showNotification = (notification: NotificationType) => (
  dispatch: Dispatch
): void => {
  dispatch({
    type: SHOW_NOTIFICATION,
    notification,
  });
};

export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const removeNotification = (id: string | number) => (
  dispatch: Dispatch
): void => {
  dispatch({
    type: REMOVE_NOTIFICATION,
    id,
  });
};
