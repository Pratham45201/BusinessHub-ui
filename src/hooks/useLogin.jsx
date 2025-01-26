import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
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

    axios
      .post(`https://uniqual.dev:3001/api/v1/auth/login`, body, config)
      .then((response) => {
        setIsLoading(false);
        if (response.data) {
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: response.data.data?.firstName,
              lastName: response.data.data?.lastName,
              email: values.email,
            })
          );
        }
      })
      .catch((e) => {
        console.log(e.response.data.message);
        setIsLoading(false);
        return e.response.data.message;
      });
  };
  return { login, isLoading };
};
