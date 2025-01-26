import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Stack,
  Button,
  InputLabel,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import * as yup from "yup";
import { Formik, Form } from "formik";

const CreateAccountDialog = ({ open, openLogin, close }) => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().trim().required("First name is required"),

    lastName: yup.string().trim().required("Last name is required"),

    email: yup
      .string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),

    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .required("Password is required"),

    confirmPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .oneOf([yup.ref("password"), null], "Password is not matching")
      .required("Password is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            openLogin();
          }, 400);
          console.log(setSubmitting);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <Dialog
              scroll="body"
              open={open}
              onClose={close}
              fullWidth
              maxWidth="sm"
              PaperProps={{
                component: "form",
                sx: {
                  px: { md: "60px", sm: "60px", xs: "20px" },
                  pt: { md: "70px", sm: "50px", xs: "20px" },
                  pb: "20px",
                },
              }}
            >
              <DialogTitle sx={{ textAlign: "center" }}>
                Create Your Account
              </DialogTitle>
              <Stack direction={"column"} gap={{ md: 3, xs: 1 }}>
                <Stack direction={"row"} gap={3}>
                  <Box width={"50%"}>
                    <InputLabel sx={{ color: "#1D1D3E" }}>
                      First Name
                    </InputLabel>
                    <TextField
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      variant="outlined"
                      sx={{ width: "100%" }}
                    ></TextField>
                  </Box>
                  <Box width={"50%"}>
                    <InputLabel sx={{ color: "#1D1D3E" }}>Last Name</InputLabel>
                    <TextField
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      variant="outlined"
                      sx={{ width: "100%" }}
                    ></TextField>
                  </Box>
                </Stack>
                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>
                    Email Address
                  </InputLabel>
                  <TextField
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    variant="outlined"
                    sx={{ width: "100%" }}
                  ></TextField>
                </Box>

                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>Password</InputLabel>
                  <TextField
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    variant="outlined"
                    sx={{ width: "100%" }}
                  ></TextField>
                </Box>

                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>
                    Confirm Password
                  </InputLabel>
                  <TextField
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    variant="outlined"
                    sx={{ width: "100%" }}
                  ></TextField>
                </Box>

                <Button variant="contained" type="submit">
                  Sign up
                </Button>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"Center"}
                  mt={"30px"}
                >
                  <Typography>Already have an account?</Typography>
                  <Button disabled={isSubmitting}
                  onClick={openLogin} variant="text" sx={{ p: 0, fontWeight: "100" }}>
                    Sign in
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

export default CreateAccountDialog;
