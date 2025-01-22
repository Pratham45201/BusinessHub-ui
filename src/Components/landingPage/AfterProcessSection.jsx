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
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const boxData = [
  {
    logo: "trophy_logo.svg",
    title: "Offending belonging",
    caption:
      "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
  },
  {
    logo: "flower_logo.svg",
    title: "Promotion & provision",
    caption:
      "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    logo: "sun_logo.svg",
    title: "Blessing application",
    caption:
      "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
  },
];

const AfterProcessSection = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#F5F8FF",
          backgroundSize: "10%",
          backgroundRepeat: "no-repeat",
          background: "linear-gradient(180deg, white 15%, #F5F8FF 1%)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            textAlign: "center",
            maxWidth: "60%",
            marginInline: "auto",
            gridTemplateColumns: "1fr 10fr 1fr",
            gridTemplateRows: "auto",
          }}
        >
          <Box
            sx={{
              gridColumn: "1/4",
              gridRow: "1/1",
            }}
          >
            <img src="rect_4372.svg" style={{ width: "100%" }} />
          </Box>
          <Stack
            direction={"column"}
            gridColumn={"2/3"}
            gridRow={"1/1"}
            sx={{
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" sx={{ color: "white" }}>
              Push your product to next level.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "500",
              }}
            >
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </Typography>
            <Button
              sx={{ width: "180px", borderRadius: "47px", p: "15px 38px" }}
              variant="contained"
            >
              Get Started
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            mt: "100px",
          }}
        >
          <Typography variant="h1" sx={{}}>
            We help your business grow faster.
          </Typography>
        </Box>

        <Box width={{ md: "45%", sm: "70%", xs: "75%" }} marginInline={"auto"}>
          <Typography
            variant="h4"
            color="common.grey"
            fontWeight={"400"}
            mt={"15px"}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </Typography>
        </Box>

        <Stack direction={"row"} mt={"100px"} justifyContent={"center"} gap={5}>
          {boxData.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                borderRadius: "20px",
                textAlign: "left",
                width: "380px",
                height: "350px",
                alignItems: "start",
                justifyContent: "flex-end",
                textAlign: "left",
                p: "0 2% 2% 2%",
              }}
            >
              <img src={item.logo} style={{ width: "12%" }} />
              <Typography variant="h3" mt="10%">
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={"400"}
                mt={"5%"}
                color="common.grey"
              >
                {item.caption}
              </Typography>
              <Button
                sx={{
                  color: "common.green",
                  p: 0,
                  fontWeight: "500",
                  mt: "5%",
                }}
                endIcon={<TrendingFlatIcon />}
              >
                Read More
              </Button>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            background: "linear-gradient(180deg, #F5F8FF 73%, white 50%)",
          }}
        >
          <Button variant="contained" sx={{ mt: "4%" }}>
            More About Platform
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AfterProcessSection;
