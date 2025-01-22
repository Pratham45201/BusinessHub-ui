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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

let navItems = ["Product", "Template", "Blog", "Pricing"];
let navItems2 = ["Sign In", "Start Free"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showDrawer = useMediaQuery("(max-width: 760px)");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const Image = styled("img")``;

  const DrawerList = (
    <Box
      sx={{
        width: 240,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        mx: "15px",
        zIndex: 1,
      }}
      role="presentation"
    >
      <Box
        disablePadding
        disableElevation
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: "15px",
        }}
      >
        <Image src={"logo.svg"} alt="logo" sx={{ width: "150px" }} />
        <IconButton onClick={toggleDrawer}>
          <Icon>
            <CloseIcon />
          </Icon>
        </IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem disablePadding key={item}>
            <ListItemButton disableGutters>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack
      direction={"row"}
        sx={{
          display:showDrawer ? "flex":"none",
          justifyContent:"space-between",
          alignItems:"center",
        }}
      >
        <Button sx={{ textDecoration:"none", p:0, m:0, justifyContent:"flex-start" }}>Sign In</Button>
        <Button disablePadding variant="contained"  sx={{ textDecoration:"none" }}>Get Started</Button>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{ background: "transparent" }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: { md: "120px", sm: "90px", xs: "50px" },
              mt: "30px",
            }}
          >
            <Box sx={{}}>
              <img
                src="logo.svg"
                style={{ width: { sm: "180px", xs: "auto" } }}
              ></img>
            </Box>
            <Stack
              sx={{
                display: { lg: "flex", xs: "none" },
                flexDirection: "row",
                pr: { lg: "60px" },
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  color="dark"
                  sx={{
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

            <Stack
              sx={{
                flexDirection: "row",
                gap: 4,
              }}
            >
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
                    display: showDrawer ? "none" : "block",
                  }}
                >
                  {item}
                </Button>
              ))}
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { lg: "none", xs: "block" }, p:0 }}
              >
                <Icon>
                  <MenuIcon />
                </Icon>
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
            {DrawerList}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Header;
