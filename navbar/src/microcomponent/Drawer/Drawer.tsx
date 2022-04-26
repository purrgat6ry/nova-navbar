import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, FormControlLabel, Switch } from "@mui/material";
import {ArrowsButtons} from "../ArrowsNav/Arrows";
import BasicPopover from "../displayhrs/DisplayHrs";

export default function MainDrawer() {
  const [rightOpen, setRightOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setRightOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem color="primary">
          <Avatar sx={{ bgcolor: "primary.main" }}>DL</Avatar>
          <ListItemText primary="David Lopez" sx={{ ml: 1 }} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <TodayIcon color="primary" />
          </ListItemIcon>
          <ListItemText onClick={() => {
                  console.log("Today button was clicked!");
                }} primary="Today" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <AccessTimeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={<BasicPopover /> } />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <CalendarMonthIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Apr 2022" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem color="primary">
          <FormControlLabel
            control={
              <Switch checked={checked} onChange={() => setChecked(!checked)} />
            }
            label={checked ? "Monthly" : "Weekly"}
          />
        </ListItem>
        <ListItem  >
          <ArrowsButtons  onClick={()=>console.log("desde el drawer")} color="primary" size="small"/>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div data-testid="mainDrawer">
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer(!rightOpen)}
          edge="start"
          sx={{ ...(rightOpen && { display: "none" })}}
        >
          <MenuIcon sx={{fill: "#fff"}} />
        </IconButton>
        <Drawer anchor="right" open={rightOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </div>
  );
}