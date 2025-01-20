import { Grid2, Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      <Grid2 container display={"flex"} flexDirection={"row"} flexWrap={"nowrap"}>
        <Box item xs={4} md={3}>
          <Typography>Product Growth Solution in Single Platform</Typography>
          <Typography>
            Managing business payments has never been easier
          </Typography>
          <Typography>
            Never at water me might. On formed merits hunted unable merely by mr
            whence or. Possession the unpleasing simplicity her uncommonly.
          </Typography>
        </Box>
        <Box item xs={8} md={9}>
          <img src="group_1.svg" />
        </Box>
      </Grid2>
    </div>
  );
};

export default HeroSection;
