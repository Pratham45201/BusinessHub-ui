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
  Select,
  MenuItem,
  styled,
} from "@mui/material";
import exampleImage from "../../resources/images/unnamed.jpg";
import { useEditProfile } from "../../hooks/useEditProfile";
import { Formik, Form } from "formik";
import * as yup from "yup";

const CustomDialogComponent = ({ label, placeholder, defaultValue, width }) => (
  <Box>
    <InputLabel sx={{ color: "#1D1D3E" }}>{label}</InputLabel>
    <TextField
      placeholder={placeholder}
      variant="outlined"
      defaultValue={defaultValue}
      sx={{ width: { width } }}
    ></TextField>
  </Box>
);

const ImageAvatar = styled("img")({
  overflow: "hidden",
  filter: "grayscale(50%)",
  borderRadius: "50%",
});

const UpdateImage = () => (
  <Box
    onClick={
      // TODO
      () => console.log("working")
    }
    sx={{
      position: "relative",
      height: "120px",
      width: "120px",
      borderRadius: "50%",
    }}
  >
    <ImageAvatar src={exampleImage} />
    <img
      src="profile_update.svg"
      style={{ position: "absolute", top: "44px", left: "44px" }}
    />
  </Box>
);

const EditProfileDialog = ({ open, close }) => {
  const { edit, editSuccess, errorMessage } = useEditProfile();

  const userData = JSON.parse(sessionStorage.getItem("loginData"));

  const validationSchema = yup.object({
    firstName: yup.string().trim().required("Please enter first name"),
    lastName: yup.string().trim().required("Please enter last name"),
    gender: yup.string().trim().required("Please enter gender"),
    companyName: yup.string().trim().required("Please enter company name"),
    education: yup.string().trim().required("Please enter education"),
    jobTitle: yup.string().trim().required("Please enter job title"),
    aboutMe: yup.string().trim().required("Please enter about yourself"),
    qualification: yup.string().trim().required("Please enter qualification"),
    experienceYearMin: yup
      .number()
      .min(0, "Please enter valid number")
      .required("Year required"),
    experienceYearMax: yup
      .number()
      .min(yup.ref("experienceYearMin"), "Please enter valid number")
      .required("Year required"),
    educationYearMin: yup
      .number()
      .min(0, "Should be greater than strting year")
      .required("Year required"),
    educationYearMax: yup
      .number()
      .min(yup.ref("experienceYearMin"), "Should be greater than strting year")
      .required("Year required"),
  });

  const initialValues = {
    firstName: userData ? userData.firstName : "",
    lastName: userData ? userData.lastName : "",
    email: userData ? userData.email : "",
    gender: userData ? userData.gender : "",
    companyName: userData ? userData.companyName : "",
    education: userData ? userData.education : "",
    jobTitle: userData ? userData.jobTitle : "",
    aboutMe: userData ? userData.aboutMe : "",
    qualification: userData ? userData.qualification : "",
    experienceYearMin: userData ? userData.experienceYearMin : "",
    experienceYearMax: userData ? userData.experienceYearMax : "",
    educationYearMin: userData ? userData.educationYearMin : "",
    educationYearMax: userData ? userData.educationYearMax : "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          edit(values);
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
                Edit Profile
              </DialogTitle>
              <Stack direction={"column"} gap={{ md: 3, xs: 1 }}>
                <Box>
                  <InputLabel>Profile Picture</InputLabel>
                  <UpdateImage />
                </Box>
                <Stack direction={"row"} gap={3}>
                  <Box width={"50%"}>
                    <InputLabel sx={{ color: "#1D1D3E" }}>
                      First Name
                    </InputLabel>
                    <TextField
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      placeholder="First Name"
                      variant="outlined"
                      value={values.email}
                      sx={{ width: "100%" }}
                      defaultValue={initialValues.firstName}
                    ></TextField>
                  </Box>
                  <Box width={"50%"}>
                    <InputLabel sx={{ color: "#1D1D3E" }}>Last Name</InputLabel>
                    <TextField
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      placeholder="Last Name"
                      variant="outlined"
                      value={values.lastName}
                      sx={{ width: "100%" }}
                      defaultValue={initialValues.lastName}
                    ></TextField>
                  </Box>
                </Stack>

                <CustomDialogComponent
                  label={"Email Address"}
                  placeholder={"Email Address"}
                  width={"100%"}
                  defaultValue={initialValues.email}
                />

                <Box>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.gender && Boolean(errors.gender)}
                    helperText={touched.gender && errors.gender}
                    placeholder="Company Name"
                    variant="outlined"
                    value={values.gender}
                    sx={{ width: "100%" }}
                    defaultValue=""
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </Box>

                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>Experience</InputLabel>
                  <Stack direction={"row"} gap={3}>
                    <TextField
                      id="companyName"
                      name="companyName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.companyName && Boolean(errors.companyName)}
                      helperText={touched.companyName && errors.companyName}
                      placeholder="Company Name"
                      variant="outlined"
                      value={values.companyName}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.companyName}
                    ></TextField>

                    <TextField
                      id="jobTitle"
                      name="jobTitle"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.jobTitle && Boolean(errors.jobTitle)}
                      helperText={touched.jobTitle && errors.jobTitle}
                      placeholder="Job Role"
                      variant="outlined"
                      value={values.jobTitle}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.jobTitle}
                    ></TextField>
                  </Stack>

                  <Stack
                    direction={"row"}
                    width={"50%"}
                    gap={1}
                    alignItems={"center"}
                    mt={"10px"}
                  >
                    <TextField
                      id="experienceYearMin"
                      name="experienceYearMin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.experienceYearMin &&
                        Boolean(errors.experienceYearMin)
                      }
                      helperText={
                        touched.experienceYearMin && errors.experienceYearMin
                      }
                      placeholder="Year"
                      variant="outlined"
                      value={values.experienceYearMin}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.experienceYearMin}
                    ></TextField>

                    <Typography fontSize={"14px"}>TO</Typography>

                    <TextField
                      id="experienceYearMax"
                      name="experienceYearMax"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.experienceYearMax &&
                        Boolean(errors.experienceYearMax)
                      }
                      helperText={
                        touched.experienceYearMax && errors.experienceYearMax
                      }
                      placeholder="Year"
                      variant="outlined"
                      value={values.experienceYearMax}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.experienceYearMax}
                    ></TextField>
                  </Stack>
                </Box>

                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>Education</InputLabel>
                  <Stack direction={"row"} gap={3}>
                    <TextField
                      id="education"
                      name="education"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.education && Boolean(errors.education)}
                      helperText={touched.education && errors.education}
                      placeholder="School/College"
                      variant="outlined"
                      value={values.education}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.education}
                    ></TextField>

                    <TextField
                      id="qualification"
                      name="qualification"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.qualification && Boolean(errors.qualification)
                      }
                      helperText={touched.qualification && errors.qualification}
                      placeholder="Qualification"
                      variant="outlined"
                      value={values.qualification}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.qualification}
                    ></TextField>
                  </Stack>
                  <Stack
                    direction={"row"}
                    width={"50%"}
                    gap={1}
                    alignItems={"center"}
                    mt={"10px"}
                  >
                    <TextField
                      id="educationYearMin"
                      name="educationYearMin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.educationYearMin &&
                        Boolean(errors.educationYearMin)
                      }
                      helperText={
                        touched.educationYearMin && errors.educationYearMin
                      }
                      placeholder="Year"
                      variant="outlined"
                      value={values.educationYearMin}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.educationYearMin}
                    ></TextField>
                    <Typography fontSize={"14px"}>TO</Typography>
                    <TextField
                      id="educationYearMax"
                      name="educationYearMax"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.educationYearMax &&
                        Boolean(errors.educationYearMax)
                      }
                      helperText={
                        touched.educationYearMax && errors.educationYearMax
                      }
                      placeholder="Year"
                      variant="outlined"
                      value={values.educationYearMax}
                      sx={{ width: "50%" }}
                      defaultValue={initialValues.educationYearMax}
                    ></TextField>
                  </Stack>
                </Box>
                <Box>
                  <InputLabel sx={{ color: "#1D1D3E" }}>About you</InputLabel>
                  <TextField
                    id="aboutMe"
                    name="aboutMe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.aboutMe && Boolean(errors.aboutMe)}
                    helperText={touched.aboutMe && errors.aboutMe}
                    placeholder="Write something about you..."
                    variant="outlined"
                    value={values.aboutMe}
                    sx={{ width: "100%" }}
                    defaultValue={initialValues.aboutMe}
                    multiline
                  ></TextField>
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  disableElevation
                  disabled={isSubmitting}
                >
                  Update profile
                </Button>
              </Stack>
            </Dialog>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditProfileDialog;
