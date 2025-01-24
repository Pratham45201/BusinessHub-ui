import { Typography, Stack, Container, Box } from "@mui/material";

const Companies = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Box
        sx={{
          marginTop: {xs:"60px", xl:"100px"},
          borderTop: "0.1px solid rgba(196, 196, 196)",
          borderBottom: "0.1px solid rgba(196, 196, 196)",
          paddingTop: "70px",
          paddingBottom: "80px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            mb: "30px",
            fontSize: "22px",
            fontWeight: "550",
            mx: { xs: "12px", sm: "20px", md: "36px", lg: "120px" },
          }}
        >
          Over 32k+ software businesses growing with AR Shakir
        </Typography>
        <Stack
          direction={"row"}
          gap={5}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          mx={{ xs: "12px", sm: "20px", md: "36px", lg: "90px" }}
        >
          <img src="./company_logos/open_zeppelin_logo.svg" />
          <img src="./company_logos/oracle_logo.svg" />
          <img src="./company_logos/morpheus_logo.svg" />
          <img src="./company_logos/samsung_logo.svg" />
          <img src="./company_logos/monday_logo.svg" />
          <img src="./company_logos/segment_logo.svg" />
          <img src="./company_logos/protonet_logo.svg" />
        </Stack>
      </Box>
    </Container>
  );
};

export default Companies;
