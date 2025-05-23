import { notifications } from "@mantine/notifications";

export const NOTIF_CONTROL = {
  success: () =>
    notifications.show({
      title: "Email Sent",
      message: "Your message has been sent successfully.",
      color: "teal",
    }),
  error: () =>
    notifications.show({
      title: "Error Sending Email",
      message: "An error occurred while sending your message.",
      color: "red",
    }),
};
