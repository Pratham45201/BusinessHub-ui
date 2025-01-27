import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  styled,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Divider,
  Avatar,
} from "@mui/material";

const ImageAvatar = styled("img")({
  overflow: "hidden",
  filter: "grayscale(50%)",
  borderRadius: "50%",
});

const NotificationsDialog = ({ open, notifications, close }) => {
  const userData = JSON.parse(sessionStorage.getItem("loginData"));
  if (userData) {
    return (
      <>
        <Dialog
          scroll="body"
          open={open}
          onClose={close}
          sx={{
            "& .MuiDialog-container": {
              height: "auto",
              textAlign: "right",
            },
          }}
          PaperProps={{
            sx: {
              height: "410px",
              width: "360px",
              borderRadius: "15px",
            },
          }}
        >
          <List>
            {notifications.map((notification, index) => (
              <>
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={`${notification.profile}`} />
                  </ListItemAvatar>
                  <ListItemText>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {notification.message.split(" ").splice(0, 2).join(" ")}
                    </span>
                    <span style={{ color: "#777777" }}>
                      {" "}
                      {notification.message.split(" ").splice(2).join(" ")}
                    </span>
                  </ListItemText>
                </ListItem>
                {index < notifications.length - 1 ? (
                  <Divider key={index + notification.length} variant="middle" />
                ) : null}
              </>
            ))}
          </List>
        </Dialog>
      </>
    );
  }
};

export default NotificationsDialog;
