import {
  Box,
  Container,
  Stack,
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";

const firstList = ["About Us", "Careers", "Blog", "Pricing"];
const secondList = [
  "Templates",
  "Tutorials",
  "Free resource",
  "Contract templates",
];

const Footer = () => {
  const columize = useMediaQuery("(max-width: 1150px)");
  const columizeTwo = useMediaQuery("(max-width: 790px)");
  const changePlaceholder = useMediaQuery("(max-width: 460px)");
  return (
    <Container
    disableGutters
    maxWidth="xl"
    >
      <Box style={{ marginTop: "100px" }}>
        <Stack
          direction={columize ? "column" : "row"}
          sx={{
            mx: { md: "120px", sm: "90px", xs: "50px" },
          }}
        >
          <List>
            <ListSubheader>AR Shakir</ListSubheader>
            <ListItem>
              <ListItemText sx={{ color: "#757095" }}>
                Simple innate summer fat appear basket his desire joy.
              </ListItemText>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} gap={2}>
                <img src="linkedin_logo.svg" />
                <img src="messanger_logo.svg" />
                <img src="twitter_logo.svg" />
                <img src="twoo_logo.svg" />
              </Stack>
            </ListItem>
          </List>
          <Box
            display="flex"
            sx={{
              padding: "0px",
              margin: "0px",
              flexBasis: "100%",
              flexWrap: columizeTwo ? "wrap" : "nowrap",
              justifyContent:"space-between"
            }}
          >
            <List>
              <ListSubheader>Company</ListSubheader>
              {firstList.map((item, index) => (
                <ListItem key={item}>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
            <List>
              <ListSubheader>Resources</ListSubheader>
              {secondList.map((item, index) => (
                <ListItem key={item}>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
            <List>
              <ListSubheader>Join Our Newsletter</ListSubheader>
              <ListItem>
                <TextField
                  placeholder={changePlaceholder ? "Email":"Your email address"}
                  variant="filled"
                  sx={{
                    width: "100%",
                    "& .MuiFilledInput-input": {
                      backgroundColor: "#F9F9F9",
                      height: "50px",
                    },
                    "& .MuiInputBase-input": {
                      padding: "0px 15px !important",
                      "&::placeholder": {
                        fontWeight: "500",
                      },
                    },
                    backgroundColor: "#F9F9F9",
                  }}
                  slotProps={{
                    input: {
                      disableUnderline: true,
                      endAdornment: (
                        <Button
                          sx={{
                            backgroundColor: "#00E1F0",
                            color: "common.white",
                            borderRadius: "0px",
                            width: "50%",
                            height: "50px",
                            fontWeight: "500",
                          }}
                        >
                          Subscribe
                        </Button>
                      ),
                    },
                  }}
                ></TextField>
              </ListItem>
              <ListItem>
                <ListItemText sx={{ color: "rgb(139, 137, 153)" }}>
                  * Will send you weekly updates for your better finance
                  management.
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Stack>
        <Divider
          sx={{
            borderBottomWidth: 1,
            background: "white",
            mx: { md: "120px", sm: "90px", xs: "50px" },
            marginTop: "60px",
          }}
        />
        <Typography
          sx={{ textAlign: "center", mt: "40px", mb: "76px", fontSize: "16px" }}
        >
          Copyright @ BusinessHub 2022. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
