import { Outlet } from "react-router-dom";
import NotificationContextProvider from "../context/notification/NotificationContextProvider";

const Root = () => {
  return (
    <>
      <NotificationContextProvider>
        <Outlet />;
      </NotificationContextProvider>
    </>
  );
};

export default Root;
