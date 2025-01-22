import {
  AppBar,
  Box,
  Stack,
  Button,
  Toolbar,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemText,
  IconButton,
  styled,
  useMediaQuery,
  ListItemButton,
  ListSubheader,
  Typography,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const firstList = ["About Us", "Careers", "Blog", "Pricing"];
const secondList = [
  "Templates",
  "Tutorials",
  "Free resource",
  "Contract templates",
];

const Footer = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Box display={"flex"} ml={"120px"}>
        <Box maxWidth={"20%"}>
          <Typography>AR Shakir</Typography>
          <Typography>
            Simple innate summer fat appear basket his desire joy.
          </Typography>
          <Stack direction={"row"} gap={2}>
            <img src="linkedin_logo.svg" />
            <img src="messanger_logo.svg" />
            <img src="twitter_logo.svg" />
            <img src="twoo_logo.svg" />
          </Stack>
        </Box>
        <List>
          <ListSubheader>Company</ListSubheader>
          {firstList.map((item, index) => (
            <ListItem>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
        <List>
          <ListSubheader>Resources</ListSubheader>
          {secondList.map((item, index) => (
            <ListItem>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Box>
          <Typography>Join Our Newsletter</Typography>
          <TextField
            label="Your email address"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <Button
                    sx={{
                      backgroundColor: "#1B1C31",
                      color: "common.white",
                      borderRadius: "0px",
                      width: "50%",
                      height: "90%",
                      boxShadow: "2px black",
                    }}
                  >
                    Submit
                  </Button>
                ),
              },
            }}
          ></TextField>
          <Typography>
            * Will send you weekly updates for your better finance management.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
