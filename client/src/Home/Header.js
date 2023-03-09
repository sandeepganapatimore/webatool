import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = [
  { name: "Documentation", link: "/docs" },
  { name: "Dashboard", link: "/dashboard" },
];

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: 0 }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ textDecoration: "none" }}
          >
            WEBATOOL
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
            }}
          >
            {pages.map((page) => (
              <ListItemButton key={page?.name} href={page.link}>
                <ListItemText primary={page.name} sx={{ color: "#121211" }} />
              </ListItemButton>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
