import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useLogin } from "../../hooks/useLogin";

import {
  Stack,
  Button,
  InputLabel,
  TextField,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

const LoginDialog = ({ open, openSignup, close }) => {
  const { login, loginSuccess, errorMessage } = useLogin();

  React.useEffect(() => {
    if (loginSuccess) close();
  }, [loginSuccess]);

  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),

    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          login(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          isSubmitting,
          touched,
        }) => (
          <Form>
            <Dialog
              open={open}
              onClose={close}
              scroll="body"
              PaperProps={{
                component: "form",
                sx: {
                  width: "100%",
                  height: "auto",
                  px: { md: "80px", sm: "60px", xs: "20px" },
                  py: { md: "70px", sm: "50px", xs: "20px" },
                },
              }}
            >
              <DialogTitle sx={{ textAlign: "center" }}>Log In</DialogTitle>
              <Stack direction={"column"} gap={3}>
                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>Email</InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    placeholder="Email"
                    variant="outlined"
                    value={values.email}
                    sx={{ width: "100%" }}
                  ></TextField>
                </Box>

                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>Password</InputLabel>
                  <TextField
                    placeholder="Password"
                    variant="outlined"
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      (touched.password && Boolean(errors.password)) ||
                      errorMessage !== null
                    }
                    helperText={
                      (touched.password && errors.password) || errorMessage
                    }
                    sx={{ width: "100%" }}
                  ></TextField>
                </Box>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "underline",
                    alignSelf: "flex-end",
                    padding: "0px",
                    fontWeight: "100",
                  }}
                >
                  Forgot Password
                </Button>

                <Stack direction={"row"} alignItems={"center"}>
                  <Checkbox
                    defaultChecked
                    sx={{ textAlign: "left", padding: "0px" }}
                  />
                  <Typography>Remember me next time</Typography>
                </Stack>

                <Button variant="contained" type="submit">
                  Login
                </Button>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"Center"}
                >
                  <Typography>Don't have account?</Typography>
                  <Button
                    disabled={isSubmitting}
                    variant="text"
                    onClick={openSignup}
                    sx={{ p: 0, fontWeight: "100" }}
                  >
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Dialog>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginDialog;
