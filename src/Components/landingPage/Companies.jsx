import { Typography, Stack } from "@mui/material";

const Companies = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        borderTop: "0.1px solid rgba(196, 196, 196)",
        borderBottom: "0.1px solid rgba(196, 196, 196)",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Typography sx={{ textAlign: "center", mb: "30px", fontSize: "22px", fontWeight:"550" }}>
        Over 32k+ software businesses growing with AR Shakir
      </Typography>
      <Stack direction={"row"} gap={5} justifyContent={"space-around"} mx="100px" flexWrap={"wrap"}>
        <img src="./company_logos/open_zeppelin_logo.svg" />
        <img src="./company_logos/oracle_logo.svg" />
        <img src="./company_logos/morpheus_logo.svg" />
        <img src="./company_logos/samsung_logo.svg" />
        <img src="./company_logos/monday_logo.svg" />
        <img src="./company_logos/segment_logo.svg" />
        <img src="./company_logos/protonet_logo.svg" />
      </Stack>
    </div>
  );
};

export default Companies;
