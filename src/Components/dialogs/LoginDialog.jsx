import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Stack,
  Button,
  InputLabel,
  TextField,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

const LoginDialog = ({ open, close }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        scroll="body"
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
              placeholder="Email"
              variant="outlined"
              sx={{ width: "100%" }}
            ></TextField>
          </Box>

          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>Password</InputLabel>
            <TextField
              placeholder="Password"
              variant="outlined"
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
            <Button variant="text" sx={{ p: 0, fontWeight: "100" }}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default LoginDialog;
