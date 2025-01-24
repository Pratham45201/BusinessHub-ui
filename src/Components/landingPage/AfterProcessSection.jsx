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
  Container,
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
  const columize = useMediaQuery("(max-width: 760px)");
  const removeImage = useMediaQuery("(max-width: 550px)");
  return (
    <Container disableGutters maxWidth="xl">
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
            maxWidth: { md: "60%" },
            mx: { xs: "12px", sm: "20px", md: "auto" },
            gridTemplateColumns: "1fr 5fr 1fr",
            gridTemplateRows: "auto",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              gridColumn: "1/4",
              gridRow: "1/1",
            }}
          >
            <img
              src="rect_4372.svg"
              style={{ width: "100%", display: removeImage ? "none" : "block" }}
            />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              gridColumn: removeImage ? "1/4" : "2/3",
              gridRow: "1/1",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: removeImage ? "common.darkPurple" : "white",
                fontWeight: "bold",
                marginTop: "auto",
              }}
            >
              Push your product to next level.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: removeImage ? "common.darkPurple" : "white",
                fontWeight: "500",
                my: { md: "3%", xs: "3%" },
              }}
            >
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </Typography>
            <Button
              sx={{
                width: "35%",
                borderRadius: "47px",
                p: "1vw 2vw",
              }}
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "100px",
            maxWidth: { md: "60%" },
            mx: { xs: "12px", sm: "20px", md: "auto" },
          }}
        >
          <Typography variant="h1" sx={{}}>
            We help your business grow faster.
          </Typography>
        </Box>

        <Box width={{ md: "45%", sm: "80%", xs: "85%" }} marginInline={"auto"}>
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

        <Stack
          direction={columize ? "column" : "row"}
          mt={"100px"}
          justifyContent={"space-between"}
          mx={{ xs: "12px", sm: "20px", md: "36px", lg: "120px" }}
          gap={columize ? 5 : 0}
        >
          {boxData.map((item, index) => (
            <Box
            key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                borderRadius: "20px",
                textAlign: "left",
                flexBasis: "31%",
                height: "auto",
                alignItems: "flex-start",
                justifyContent: "center",
                textAlign: "left",
                p: "20px",
              }}
            >
              <img src={item.logo} style={{ width: "12%" }} />
              <Typography variant="h3" mt="10%" marginBottom="auto">
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
          <Button
            variant="contained"
            sx={{ mt: "4%", width: "237px", height: "52px" }}
          >
            More About Platform
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AfterProcessSection;
