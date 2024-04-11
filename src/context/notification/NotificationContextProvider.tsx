import { PropsWithChildren } from "react";
import NotificationContext from "./NotificationContext";
import { notification } from "antd";
import { NotificationType } from "../../types";

const NotificationContextProvider = ({ children }: PropsWithChildren) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description?: string
  ) => {
    api[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };

  return (
    <NotificationContext.Provider value={{ open: openNotificationWithIcon }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
