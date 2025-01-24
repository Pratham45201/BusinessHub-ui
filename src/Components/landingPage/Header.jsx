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
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import LoginDialog from "../dialogs/LoginDialog";
import CreateAccountDialog from "../dialogs/CreateAccountDialog";
import EditProfileDialog from "../dialogs/EditProfileDialog";

let navItems = ["Product", "Template", "Blog", "Pricing"];
let navItems2 = ["Sign In", "Start Free"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currIndex, setCurrIndex] = useState(null);
  const menuItems = [
    ["Product 1", "Product 2", "Product 3"],
    ["Template 1", "Template 2", "Template 3"],
  ];

  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(!openLoginDialog);
  };

  const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false);
  const handleCreateAccountDialog = () => {
    setOpenCreateAccountDialog(!openCreateAccountDialog);
  };

  const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);
  const handleOpenEditProfileDialog = () => {
    setOpenEditProfileDialog(!openEditProfileDialog);
  };

  const showDrawer = useMediaQuery("(max-width: 600px)");

  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setCurrIndex(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrIndex(null);
  };

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
          display: showDrawer ? "flex" : "none",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleOpenLoginDialog}
          sx={{
            textDecoration: "none",
            p: 0,
            m: 0,
            justifyContent: "flex-start",
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={handleCreateAccountDialog}
          disablePadding
          variant="contained"
          sx={{ textDecoration: "none" }}
        >
          Start free
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Container maxWidth="xl">
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
              mx: { xs: "12px", sm: "20px", md: "36px", lg: "120px" },
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
                display: { md: "flex", xs: "none" },
                flexDirection: "row",
                pr: { lg: "60px" },
              }}
            >
              {navItems.map((item, index) => (
                <div key={item}>
                  <Button
                    color="dark"
                    onClick={(e) => handleClick(e, index)}
                    sx={{
                      fontSize: "14px",
                      textTransform: "none",
                      fontWeight: "500",
                    }}
                    endIcon={index < 2 ? <KeyboardArrowDownIcon /> : null}
                  >
                    {item}
                  </Button>
                  {index < 2 ? (
                    <Menu
                      open={open && currIndex === index}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                    >
                      {menuItems[index].map((item, _) => (
                        <MenuItem key={item}>{item}</MenuItem>
                      ))}
                    </Menu>
                  ) : null}
                </div>
              ))}
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                gap: 4,
              }}
            >
              <Button
                disableElevation
                variant="text"
                onClick={handleOpenLoginDialog}
                sx={{
                  color: "black",
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: "500",
                  p: 0,
                  borderRadius: "10px",
                  display: showDrawer ? "none" : "block",
                }}
              >
                Sign In
              </Button>
              <Button
                disableElevation
                variant="contained"
                onClick={handleCreateAccountDialog}
                sx={{
                  color: "white",
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: "500",
                  background: "#4F46BA",
                  p: {
                    lg: "17px 35px",
                    md: "14.5px 29px",
                    xs: "12px 24px",
                  },
                  borderRadius: "10px",
                  display: showDrawer ? "none" : "block",
                }}
              >
                Start free
              </Button>
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { md: "none", xs: "block" }, p: 0 }}
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
      <LoginDialog open={openLoginDialog} close={handleOpenLoginDialog} />
      <CreateAccountDialog
        open={openCreateAccountDialog}
        close={handleCreateAccountDialog}
      />
      <EditProfileDialog
        open={openEditProfileDialog}
        close={handleOpenEditProfileDialog}
      />
    </Container>
  );
};

export default Header;
