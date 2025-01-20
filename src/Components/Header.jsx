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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const navItems = ["Product", "Template", "Blog", "Pricing"];
const navItems2 = ["Sign In", "Start Free"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Box>
        <AppBar position="sticky" elevation={0} sx={{ background: "transparent" }}>
          <Toolbar sx={{ marginInline: "120px", mt: "30px" }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <Icon>
                <MenuIcon />
              </Icon>
            </IconButton>
            <Box>
              <img src="logo.svg" style={{ width: "180px" }}></img>
            </Box>
            <Stack
              sx={{
                display: { sm: "flex", xs: "none" },
                flexDirection: "row",
                marginInline: "auto",
                pr:"60px",
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  sx={{
                    color: "black",
                    fontSize: "14px",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                  endIcon={index < 2 ? <KeyboardArrowDownIcon /> : null}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            <Stack sx={{ flexDirection: "row", gap: 4 }}>
              {navItems2.map((item, index) => (
                <Button
                  disableElevation
                  key={item}
                  variant={index === 1 ? "contained" : "text"}
                  sx={{
                    color: "black",
                    fontSize: "14px",
                    textTransform: "none",
                    fontWeight: "500",
                    background: index === 1 ? "#4F46BA" : null,
                    color: index === 1 ? "white" : "black",
                    p: index === 1 ? "17px 35px 17px 35px" : 0,
                    borderRadius: "10px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer open={isOpen}>
            <Box>
              <Box>
                <img src="logo.svg"></img>
              </Box>
              <IconButton onClick={toggleDrawer}>
                <Icon>
                  <CloseIcon />
                </Icon>
              </IconButton>
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={item}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Header;
