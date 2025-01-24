import {
  Box,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  Container,
  styled,
} from "@mui/material";

const processInformation = [
  {
    title: "Project Discovery Call",
    logoPath: "one.svg",
    caption:
      "Party we years to order allow asked of. We so opinion friends me message as delight.",
  },
  {
    title: "Project Discovery Call",
    logoPath: "two.svg",
    caption:
      "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
  },
  {
    title: "Project Discovery Call",
    logoPath: "three.svg",
    caption:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
  },
];

const ProcessSection = () => {
  const columize = useMediaQuery("(max-width: 760px)");
  const Image = styled("img")``;
  return (
    <Container disableGutters maxWidth="xl">
      <Box
        style={{
          marginTop: "80px",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <Image
          src="ellipse_2.svg"
          sx={{ position: "absolute", display: { xl: "none", xs: "block" } }}
        />
        <Image
          src="ellipse_2.svg"
          sx={{
            position: "absolute",
            right: "0px",
            transform: "rotateY(180deg)",
            display: { xl: "none", xs: "block" },
          }}
        />
        <Stack
          direction={"column"}
          gap={2}
          width={{ md: "50%", xs: "70%" }}
          marginInline={"auto"}
          alignItems={"center"}
          pt={"80px"}
          position={"relative"}
          zIndex={1}
        >
          <Typography
            variant="body2"
            sx={{ color: "secondary.dark", fontWeight: "550" }}
          >
            STOCKIE OPERATION ACROSS THE WORLD
          </Typography>
          <Typography variant="h1">
            We have best team and best process
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", fontWeight: "400" }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "47px",
              mt: "15px",
              p: "15px 38px",
              width: "180px",
            }}
          >
            Get Started
          </Button>
        </Stack>

        <Stack
          direction={columize ? "column" : "row"}
          mt={"100px"}
          mx={columize ? "20%" : "15%"}
          gap={{ lg: 12, md: 6, xs: 3 }}
        >
          {processInformation.map((item, index) => (
            <Box
              component={"div"}
              sx={{ position: "relative", textAlign: "left", flexBasis: "33%" }}
              key={index}
            >
              <img
                src="group_199.svg"
                style={{
                  position: "absolute",
                  filter: "drop-shadow(0 0 1rem #DEE6FA)",
                  width: columize ? "20%" : "25%",
                }}
              />
              <img
                src={item.logoPath}
                style={{
                  position: "absolute",
                  right: "0px",
                  width: columize ? "30%" : "35%",
                }}
              />
              <Box mt={"30%"}>
                <Typography color="text.primary">{item.title}</Typography>
                <Typography color="text.secondary">{item.caption}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default ProcessSection;
