import {
  Grid2,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  useMediaQuery,
  Container,
} from "@mui/material";

const LawSection = () => {
  const columize = useMediaQuery("(max-width: 1000px)");
  const columizeTwo = useMediaQuery("(max-width: 760px)");
  return (
    <Container disableGutters maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: columize ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgrey",
          borderRadius: "20px",
          p: "3%",
          mx: { xs: "12px", sm: "20px", md: "36px", lg: "120px" },
          marginTop: "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "30px", sm: "27px", xs: "20px" },
            fontWeight: "600",
            flexBasis: { lg: "40%" },
            color: "common.grey",
          }}
        >
          Among leave law built now.
        </Typography>
        <Stack
          direction={columizeTwo ? "column" : "row"}
          sx={{
            alignItems: columizeTwo ? "start" : "center",
            gap: { md: 1 },
            justifyContent: "center",
            mt: columize ? "20px" : "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img src="star_logo.svg" />
            <Typography variant="h4" color="#64607D" fontWeight={"500"}>
              Village did remove enjoyed
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: columizeTwo ? "20px" : "0px",
            }}
          >
            <img src="achievement_logo.svg" />
            <Typography variant="h4" color="#64607D" fontWeight={"500"}>
              Nay likely length sooner
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: columizeTwo ? "20px" : "0px",
            }}
          >
            <img src="hint_logo.svg" />
            <Typography variant="h4" color="#64607D" fontWeight={"500"}>
              Expense windows adapted
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Grid2
        container
        mx={{ md: "120px", sm: "90px", xs: "50px" }}
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
            p: "2% 4%",
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
            Consulted ourselves it blessing welcom
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

      <Box backgroundColor="#05796B" py={"70px"} mt={"100px"} width={"100%"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: columizeTwo ? "column" : "row",
            ml: { md: "120px", sm: "90px", xs: "50px" },
            mr: columizeTwo ? { md: "120px", sm: "90px", xs: "50px" } : {},
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: columizeTwo ? "100%" : "35%",
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
              alignItems: columizeTwo ? "flex-start" : "flex-end",
              justifyContent: "center",
              mr: columizeTwo
                ? {}
                : { lg: "250px", md: "120px", sm: "90px", xs: "50px" },
              gap: 3,
              flexGrow: 1,
              width: "100%",
              mt: columizeTwo ? "25px" : "0px",
            }}
          >
            <TextField
              placeholder="Email Address"
              variant="outlined"
              sx={{
                width: columizeTwo ? "100%" : "70%",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "5px",
                  backgroundColor: "#F2F3F4",
                  opacity: "0.2",
                  height: "65px",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::placeholder": {
                    color: "white",
                  },
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            />

            <TextField
              placeholder="Password"
              variant="outlined"
              sx={{
                width: columizeTwo ? "100%" : "70%",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "5px",
                  backgroundColor: "#F2F3F4",
                  opacity: "0.2",
                  height: "65px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                ".MuiInputLabel-outlined": {
                  color: "white",
                  opacity: "0.5",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::placeholder": {
                    color: "white",
                  },
                },
              }}
            />

            <Button
              disableElevation
              variant="contained"
              sx={{
                width: columizeTwo ? "100%" : "70%",
                backgroundColor: "secondary.dark",
                borderRadius: "5px",
                height: "65px",
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LawSection;
