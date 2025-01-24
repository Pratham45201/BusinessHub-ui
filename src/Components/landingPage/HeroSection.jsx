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
  Container,
  useMediaQuery,
  InputLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material";

const HeroSection = () => {
  const theme = useTheme();
  const truncateLabel = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "absolute",
          top: { lg: "5%", md: "10%", sm: "20%", xs: "0" },
          bottom: "20%",
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
          mx: { xs: "12px", sm: "20px", md: "36px", lg: "120px" },
          mt: "8%",
        }}
      >
        <Box maxWidth={"620px"}>
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
              mb={"20px"}
            >
              Never at water me might. On formed merits hunted unable merely by
              mr whence or. Possession the unpleasing simplicity her uncommonly.
            </Typography>
            <TextField
              variant="filled"
              placeholder="shakir260@gmail.com"
              label={
                truncateLabel
                  ? "Stay connected"
                  : "Stay connected & get updated"
              }
              slotProps={{
                input: {
                  disableUnderline: true,
                  endAdornment: (
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "common.darkPurple",
                        borderRadius: "0",
                        fontSize: { md: "20px", xs: "15px" },
                        height: "80%",
                        width: "50%",
                      }}
                    >
                      Submit
                    </Button>
                  ),
                },
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                width: "100%",
                "& .MuiInputLabel-filled":{
                  marginTop:"18px",
                  fontSize:{sm:"20px", xs:"18px"},
                  color:"rgb(153,153,153) !important",
                  fontWeight:"400",
                },  
                "& .MuiFilledInput-root": {
                  height: "100px",
                },
                "& .MuiInputBase-input": {
                  paddingTop: "30px !important",
                  fontSize:"22px",
                  color:"rgb(103,103,103)",
                  "&::placeholder":{
                    color:"rgb(103,103,103)",
                    opacity:1,
                    fontSize:{md:"22px", sm:"20px", xs:"18px"}
                  }
                },
                boxShadow: "10px 10px 20px rgba(0,0,0,0.1)",
              }}
            ></TextField>
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
    </Container>
  );
};

export default HeroSection;
