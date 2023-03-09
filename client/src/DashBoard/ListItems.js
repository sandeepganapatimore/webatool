import * as React from "react";
import Box from "@mui/system/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";

const color = "#FFFFFF";
const listConfig = [
  {
    path: "/dashboard",
    name: "DashBoard",
    color,
  },
  {
    path: "/scans",
    name: "Scans",
    color,
  },
  {
    path: "/",
    name: "New Scans",
    color,
  },
];

function GetIcons(name) {
  switch (name) {
    case "DashBoard":
      return <DashboardIcon />;
    case "Scans":
      return <DashboardOutlinedIcon />;
    case "New Scans":
      return <DashboardCustomizeRoundedIcon />;
    default:
      return <></>;
  }
}

export default function ListItems() {
  return (
    <List component="nav" sx={{ mt: "50px" }}>
      {listConfig?.map((item) => {
        return (
          <ListItemButton href={item?.path} key={item?.name}>
            <ListItemIcon sx={{ color: item?.color }}>
              {GetIcons(item?.name)}
            </ListItemIcon>
            <ListItemText primary={item?.name} sx={{ color: item?.color }} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
