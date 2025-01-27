import { useState } from "react";
import axios from "axios";

export const useGetNotifications = () => {
  const [notifications, setNotifications] = useState(null);
  let token;
  if (sessionStorage.getItem("loginData")) {
    token = JSON.parse(sessionStorage.getItem("loginData")).token;
  }
  const getNotifications = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {};

    axios
      .post(
        `${import.meta.env.VITE_APP_API_URL}/users/notifications`,
        body,
        config
      )
      .then((response) => {
        if (response.data) {
          setNotifications(response.data);
          console.log(response.data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return { getNotifications, notifications };
};
