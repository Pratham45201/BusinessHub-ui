import { useState } from "react";
import axios from "axios";

export const useCreateAccount = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const signup = (values) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/register`, body, config)
      .then((response) => {
        if (response.data) {
          console.log(response);
          setSuccess(true);
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorMessage(e.response.data.message);
        return e.response.data.message;
      });
  };
  return { signup, success, errorMessage };
};
