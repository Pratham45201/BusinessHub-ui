import { Input } from "@mui/icons-material";
import { Grid2, Box, Typography, Paper } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      <Grid2
        container
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"120px"}
      >
        <Grid2 item size={5} zIndex={0}>
          <Box >
            <Typography fontSize={"20px"}>Product Growth Solution in Single Platform</Typography>
            <Typography fontSize={"60px"} fontWeight={"bold"}>
              Managing business payments has never been easier
            </Typography>
            <Typography fontSize={"20px"}>
              Never at water me might. On formed merits hunted unable merely by
              mr whence or. Possession the unpleasing simplicity her uncommonly.
            </Typography>
            <Paper>
                <Input>
                </Input>
            </Paper>
          </Box>
        </Grid2>
        <Grid2 item size={7} zIndex={1}>
          <Box>
            <img src="group_1.svg" width={"100%"} />
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default HeroSection;
