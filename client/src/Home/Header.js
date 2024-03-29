import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Documentation", link: "/docs" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "Login", link: "/user/signin" },
];

function HeaderMobile() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ color: "#1d1b1e" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            color: "#1d1b1e",
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page?.name} onClick={handleCloseNavMenu}>
              <Typography
                component="a"
                sx={{ textDecoration: "none" }}
                textAlign="center"
                href={page.link}
              >
                {page?.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

function HeaderWeb() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, ml: 5 }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{ textDecoration: "none", mt: 1 }}
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
    </Box>
  );
}

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF", boxShadow: 0 }}>
      <Container disableGutters>
        <Toolbar>
          <HeaderWeb />
          <HeaderMobile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
