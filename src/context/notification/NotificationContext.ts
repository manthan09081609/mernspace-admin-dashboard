import { createContext } from "react";
import { NotificationType } from "../../types";

type notificationFunction = (
  type: NotificationType,
  message: string,
  decription?: string
) => void;

type NotificationContextType = {
  open: notificationFunction;
};

const NotificationContext = createContext<NotificationContextType>({ open });

export default NotificationContext;
