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
import { useState } from "react";
import exampleImage from "../../resources/images/unnamed.jpg";

const CustomDialogComponent = ({ label, placeholder, width }) => (
  <Box>
    <InputLabel sx={{ color: "#1D1D3E" }}>{label}</InputLabel>
    <TextField
      placeholder={placeholder}
      variant="outlined"
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
    onClick={() => console.log("working")}
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
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <Dialog
        scroll="body"
        open={open}
        onClose={close}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          component: "form",
          onSubmit: (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.emai;
            console.log(email);
            close();
          },
          sx: {
            px: { md: "60px", sm: "60px", xs: "20px" },
            pt: { md: "70px", sm: "50px", xs: "20px" },
            pb: "20px",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>Edit Profile</DialogTitle>
        <Stack direction={"column"} gap={{ md: 3, xs: 1 }}>
          <Box>
            <InputLabel>Profile Picture</InputLabel>
            <UpdateImage />
          </Box>
          <Stack direction={"row"} gap={3}>
            <Box width={"50%"}>
              <InputLabel sx={{ color: "#1D1D3E" }}>First Name</InputLabel>
              <TextField
                placeholder="First Name"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
            <Box width={"50%"}>
              <InputLabel sx={{ color: "#1D1D3E" }}>Last Name</InputLabel>
              <TextField
                placeholder="Last Name"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
          </Stack>

          <CustomDialogComponent
            label={"Email Address"}
            placeholder={"Email Address"}
            width={"100%"}
          />

          <Box>
            <InputLabel>Gender</InputLabel>
            <Select
              sx={{ width: "100%" }}
              value={gender}
              onChange={handleGenderChange}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </Box>

          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>Experience</InputLabel>
            <Stack direction={"row"} gap={3}>
              <TextField
                placeholder="Company's name"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>

              <TextField
                placeholder="Job role"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
            </Stack>

            <Stack
              direction={"row"}
              width={"40%"}
              gap={1}
              alignItems={"center"}
              mt={"10px"}
            >
              <TextField
                placeholder="Year"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
              <Typography fontSize={"14px"}>TO</Typography>
              <TextField
                placeholder="Year"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
            </Stack>
          </Box>

          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>Education</InputLabel>
            <Stack direction={"row"} gap={3}>
              <TextField
                placeholder="School/College"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>

              <TextField
                placeholder="Qualification"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
            </Stack>
            <Stack
              direction={"row"}
              width={"40%"}
              gap={1}
              alignItems={"center"}
              mt={"10px"}

            >
              <TextField
                placeholder="Year"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
              <Typography fontSize={"14px"}>TO</Typography>
              <TextField
                placeholder="Year"
                variant="outlined"
                sx={{ width: "50%" }}
              ></TextField>
            </Stack>
          </Box>
          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>About you</InputLabel>
            <TextField
              placeholder="Write something about you..."
              variant="outlined"
              sx={{ width: "100%" }}
              multiline
            ></TextField>
          </Box>

          <Button variant="contained" type="submit">
            Update profile
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default EditProfileDialog;
