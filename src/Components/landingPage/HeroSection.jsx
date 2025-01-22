import {
  Email,
  FormatUnderlined,
  Height,
  Input,
  Opacity,
  PaddingRounded,
} from "@mui/icons-material";
import {
  Grid2,
  Box,
  Typography,
  Paper,
  TextField,
  Stack,
  styled,
  alpha,
  Button,
  Icon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HeroSection = () => {
  const EmailTextField = styled((props) => <TextField {...props} />)(
    ({ theme }) => ({
      "& .MuiFilledInput-root": {
        overflow: "hidden",
        paddingTop: "10px",
        borderRadius: "0 !important",
        border: "black",
        backgroundColor: "white",
        opacity: "1",
        height: "100px",
        transition: theme.transitions.create(["background-color"]),
        "&:hover": {
          backgroundColor: "white",
        },
        "&.Mui-focused": {
          backgroundColor: "white",
        },
      },
    })
  );

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "0px",
          width: { lg: "55vw", md: "50vw", xs: 0 },
          zIndex: "0",
        }}
      >
        <img style={{}} src="group_1.svg" />
      </Box>
      <Box
        sx={{
          width: { lg: "43vw", md: "45vw" },
          ml: { md: "120px", sm: "90px", xs: "50px" },
          mr: { md: 0, sm: "90px", xs: "50px" },
          mt: "8%",
        }}
      >
        <Box>
          <Box>
            <Typography variant="h4" fontWeight={"400"}>
              Product Growth Solution in Single Platform
            </Typography>
            <Typography
              fontSize={{ lg: "60px", md: "50px", xs: "40px" }}
              fontWeight={"bold"}
              lineHeight={"1.3em"}
            >
              Managing business payments has never been easier
            </Typography>
            <Typography
              variant="h4"
              fontWeight={"100"}
              color="text.secondary"
              mt={"10px"}
            >
              Never at water me might. On formed merits hunted unable merely by
              mr whence or. Possession the unpleasing simplicity her uncommonly.
            </Typography>

            <EmailTextField
              label="Stay connected & get updates"
              defaultValue="shakir260@gmail.com"
              variant="filled"
              disableUnderline
              style={{ marginTop: "20px", width: "100%" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  endAdornment: (
                    <Button
                      sx={{
                        backgroundColor: "#1B1C31",
                        color: "common.white",
                        borderRadius: "0px",
                        width: "50%",
                        // height: "100%",
                        p:0,
                        boxShadow: "2px black",
                      }}
                    >
                      Submit
                    </Button>
                  ),
                },
              }}
            ></EmailTextField>
            <Box sx={{ display: "flex", gap: 1, mt: "60px" }}>
              <CheckCircleIcon sx={{ color: "#F57059" }} />
              <Typography
                mr={"20px"}
                sx={{ color: "#757095", fontSize: "17px", fontWeight: "100" }}
              >
                Free Register
              </Typography>
              <CheckCircleIcon sx={{ color: "#F57059" }} />
              <Typography
                sx={{ color: "#757095", fontSize: "17px", fontWeight: "100" }}
              >
                Great Service
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HeroSection;
