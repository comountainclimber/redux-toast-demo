import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "./store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeNotification } from "./store/notificationActions";

const NotificationListener: React.FC<{}> = (): ReactElement => {
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state: GlobalState) => state.notification
  );
  const { notifications } = notificationState;

  const processNotificationQueue = () => {
    if (notifications.length) {
      for (const notification of notifications) {
        toast(notification.message);
        dispatch(removeNotification(notification.id));
      }
    }
  };

  processNotificationQueue();
  return <ToastContainer />;
};

export default NotificationListener;
