import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = (values) => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = {
      email: values.email,
      password: values.password,
    };

    let token = null;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/login`, body, config)
      .then((response) => {
        setErrorMessage(null)
        setLoginSuccess(true)
        setIsLoading(false);
        if (response.data) {
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: response.data.data?.firstName,
              lastName: response.data.data?.lastName,
              email: values.email,
              token: response.data.data.authentication.accessToken,
            })
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorMessage(e.response.data.message);
        setIsLoading(false);
        return e.response.data.message;
      });
  };
  return { login, loginSuccess, errorMessage };
};
