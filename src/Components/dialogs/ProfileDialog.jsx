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

const ImageAvatar = styled("img")({
  overflow: "hidden",
  filter: "grayscale(50%)",
  borderRadius: "50%",
});

const ProfileDialog = ({ open, openEditProfile, close }) => {
  const userData = JSON.parse(sessionStorage.getItem("loginData"));
  if (userData) {
    return (
      <>
        <Dialog
          scroll="body"
          open={open}
          onClose={close}
          sx={{
            "& .MuiDialog-container": {
              height: "auto",
              textAlign: "right",
            },
          }}
          PaperProps={{
            sx: {
              height: "406px",
              width: "360px",
              borderRadius: "15px",
            },
          }}
        >
          <Stack
            direction={"column"}
            margin={"50px 20px 20px 20px"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <img
              src={exampleImage}
              style={{
                borderRadius: "50%",
                maxHeight: "120px",
                maxWidth: "120px",
                width: "50%",
                height: "50%",
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {userData.firstName} {userData.lastName}{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "#999999" }}>
              {userData.email}
            </Typography>
            <Box sx={{ marginTop: "40px", width: "100%" }}>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  height: "50px",
                  color: "primary.main",
                  backgroundColor: "#EBEAFF",
                }}
              >
                Change Password
              </Button>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  marginTop: "15px",
                  height: "50px",
                }}
                onClick={openEditProfile}
              >
                Edit Profile
              </Button>
            </Box>
          </Stack>
        </Dialog>
      </>
    );
  }
};

export default ProfileDialog;
