import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  BookmarksOutlined,
  PersonOutline,
  SignalCellularAlt,
} from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

export default function BasicList() {
  const [email, setEmail] = React.useState("");
  const { data: session } = useSession();
  React.useEffect(() => {
    if (session?.user?.email) {
      // Get the username part of the email (characters before '@')
      const username = session?.user?.email.split("@")[0];

      // Calculate the number of dots needed
      const numberOfDots = Math.max(0, username.length - 2);

      // Create a string with dots and concatenate with the domain
      const maskedEmail = `${username.substring(0, 2)}${".".repeat(
        numberOfDots
      )}@${session?.user?.email.split("@")[1]}`;
      setEmail(maskedEmail);
    }
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        minWidth: 250,
        bgcolor: "background.paper",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksOutlined />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Stories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SignalCellularAlt />
              </ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List dense>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Recommendations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Become a member" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <button
            className="px-3 text-sm"
            type="button"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <p className="px-3 text-xs text-slate-700">{email}</p>
        </List>
      </nav>

      <ul className="text-xs text-slate-600 flex flex-wrap p-3 bg-zinc-100 cursor-pointer">
        <li className="pr-3">Status</li>
        <li className="pr-3">About</li>
        <li className="pr-3">Careers</li>
        <li className="pr-3">Blog</li>
        <li className="pr-3">Privacy</li>
        <li className="pr-3">Terms</li>
      </ul>
    </Box>
  );
}
