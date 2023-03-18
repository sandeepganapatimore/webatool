import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";

const color = "#1d1b1e";
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
      return <DashboardIcon sx={{ color: "#1d1b1e" }} />;
    case "Scans":
      return <DashboardOutlinedIcon sx={{ color: "#1d1b1e" }} />;
    case "New Scans":
      return <DashboardCustomizeRoundedIcon sx={{ color: "#1d1b1e" }} />;
    default:
      return <></>;
  }
}

export default function ListItems() {
  return (
    <List component="nav" sx={{ mr: 10, mt: 2 }}>
      {listConfig?.map((item) => {
        return (
          <ListItemButton href={item?.path} key={item?.name}>
            <ListItemIcon sx={{ color: item?.color }}>
              {GetIcons(item?.name)}
            </ListItemIcon>
            <ListItemText
              primary={item?.name}
              sx={{ color: item?.color, display: { xs: "none", md: "flex" } }}
            />
          </ListItemButton>
        );
      })}
    </List>
  );
}
