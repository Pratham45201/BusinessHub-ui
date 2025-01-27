import { useState } from "react";
import axios from "axios";

export const useEditProfile = () => {
  const [editSuccess, setEditSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  let token;
  if (sessionStorage.getItem("loginData")) {
    token = JSON.parse(sessionStorage.getItem("loginData")).token;
  }
  const edit = (values) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      companyName: values.companyName,
      education: values.education,
      jobTitle: values.jobTitle,
      aboutMe: values.aboutMe,
      qualification: values.qualification,
      experienceYearMin: parseInt(values.experienceYearMin),
      experienceYearMax: parseInt(values.experienceYearMax),
      educationYearMin: parseInt(values.educationYearMin),
      educationYearMax: parseInt(values.educationYearMax),
    };

    axios
      .post(`https://uniqual.dev:3001/api/v1/users/update`, body, config)
      .then((response) => {
        setErrorMessage(null);
        setEditSuccess(true);
        if (response.data) {
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              gender: values.gender,
              email:values.email,
              companyName: values.companyName,
              education: values.education,
              jobTitle: values.jobTitle,
              aboutMe: values.aboutMe,
              qualification: values.qualification,
              experienceYearMin: values.experienceYearMin,
              experienceYearMax: values.experienceYearMax,
              educationYearMin: values.educationYearMin,
              educationYearMax: values.educationYearMax,
            })
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorMessage(e.response.data.message);
        return e.response.data.message;
      });
  };
  return { edit, editSuccess, errorMessage };
};
