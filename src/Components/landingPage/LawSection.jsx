import {
  BorderColor,
  Email,
  FormatUnderlined,
  Height,
  Input,
  MarginTwoTone,
  Opacity,
  PaddingRounded,
  Toys,
  TypeSpecimen,
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
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const LawSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgrey",
          borderRadius: "20px",
          p: "3%",
          maxWidth: "83%",
          marginInline: "auto",
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ flexBasis: { md: "30%", xs: "100%" }, color: "common.grey" }}
        >
          Among leave law built now.
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <img src="star_logo.svg" />
            <Typography>Village did remove enjoyed</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <img src="achievement_logo.svg" />
            <Typography>Nay likely length sooner</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <img src="hint_logo.svg" />
            <Typography>Expense windows adapted</Typography>
          </Box>
        </Box>
      </Box>

      <Grid2
        container
        sx={{ marginTop: "100px", flexDirection: "row" }}
        gap={5}
        justifyContent={"center"}
      >
        <Grid2
          size={5}
          gap={3}
          sx={{
            display: "flex",
            backgroundColor: "#F8F9FD",
            borderRadius: "20px",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "580px",
            height: "354px",
            p: "2%",
          }}
        >
          <Typography variant="h1">
            Offend belong <br></br> promote provision
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={"500"}
            color="common.grey"
          >
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income.{" "}
          </Typography>
          <Button variant="contained">Read More</Button>
        </Grid2>

        <Grid2
          size={5}
          gap={3}
          sx={{
            display: "flex",
            backgroundColor: "#F8F9FD",
            borderRadius: "20px",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "580px",
            height: "354px",
            p: "2%",
          }}
        >
          <Typography variant="h1">
            Consulted ourselves it <br></br> blessing welcom
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={"500"}
            color="common.grey"
          >
            The expense windows adapted sir. Wrong widen drawn ample eat off
            doors money.{" "}
          </Typography>
          <Button variant="contained">Read More</Button>
        </Grid2>
      </Grid2>

      <Box backgroundColor="#05796B" height={"450px"} mt={"100px"}>
        <Box
          sx={{
            display: "flex",
            ml: "120px",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: "35%",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
              gap: 2,
            }}
          >
            <Typography variant="subtitle1">WHY CHOOSE US</Typography>
            <Typography variant="h1" fontWeight={"bold"}>
              Track your crypto portfolio on the best way possible
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Mean if he they been no hold mr.Is at much do made. Latter person
              am secure of estate genius at.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              mr: "240px",
              gap: 3,
              flexGrow: 1,
            }}
          >
            <TextField
              label="Email Address"
              variant="outlined"
              sx={{
                width: "60%",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "5px",
                  backgroundColor: "#F2F3F4",
                  opacity: "0.2",
                  height:"65px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                ".MuiInputLabel-outlined": {
                  color: "white",
                  opacity: "0.5",
                  fontSize:"20px"
                },
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              sx={{
                width: "60%",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "5px",
                  backgroundColor: "#F2F3F4",
                  opacity: "0.2",
                  height:"65px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                ".MuiInputLabel-outlined": {
                  color: "white",
                  opacity: "0.5",
                  fontSize:"20px",
                },
              }}
            />

            <Button
            disableElevation
              variant="contained"
              sx={{
                width: "60%",
                backgroundColor: "secondary.dark",
                borderRadius: "5px",
                height:"65px",
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LawSection;
