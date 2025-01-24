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

const CreateAccountDialog = ({ open, close }) => {
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
        <DialogTitle sx={{ textAlign: "center"}}>
          Create Your Account
        </DialogTitle>
        <Stack direction={"column"} gap={{md:3, xs:1}}>
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
          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>Email Address</InputLabel>
            <TextField
              placeholder="Email Address"
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

          <Box>
            <InputLabel sx={{ color: "#1D1D3E" }}>Confirm Password</InputLabel>
            <TextField
              placeholder="Confirm Password"
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
            <Button variant="text" sx={{ p: 0, fontWeight: "100" }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default CreateAccountDialog;
