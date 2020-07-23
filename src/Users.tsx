import React, { ReactElement } from "react";

import { useDispatch } from "react-redux";
import { showNotification } from "./store/notificationActions";

const Users: React.FC<{}> = (): ReactElement => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      showNotification({
        message: "This is a test notification for the USERS page!",
        id: Date.now(),
      })
    );
  };
  return (
    <div>
      <h1>HELLO USERS PAGE</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Users;
