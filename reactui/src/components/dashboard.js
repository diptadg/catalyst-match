import React from "react";
import "./homepage_style.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Catalyst Profiling", "Catalyst Report", "Connect"];
const links = [
  "/homepage",
  "/starting_page",
  "/catalyst_report",
  "/matching_page",
];
const settings = ["Profile", "Logout"];
export default function dashboard() {
  return (
    <div>
      <AppBar position="static" style={{ background: "#fffff3" }}>
        <Container maxWidth="xl" style={{color:'black'}}>
          <Toolbar disableGutters s>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              
            >
              <img src={logo} style={{ width: "1.5cm" }} alt="logo" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
                class="list-items"
              >
                <MenuIcon />

                <div class="dropdown">
                  <div style={{ listStyleType: "none"}} >
                    {pages.map((page, index) => (
                      <>
                      <li style={{padding:"5px",width:"100px" }}>
                        <NavLink to={links[index]}>{page}</NavLink>
                     
                      </li>  
                      <hr/> 
                      </>
                    ))}
                  </div>
                </div>
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
              {pages.map((page, index) => (
                <NavLink to={links[index]} style={{ textDecoration: "none" }}>
                  <Button
                    key={page}
                    //  onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
           
                <IconButton
                
                  class="list-items"
                  //onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar style={{display:"flex"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <div
                    class="dropdown"
                    style={{  left: -60 ,display:"flow" }}
                  >
                    <div style={{ listStyleType: "none" }}>
                
                    <li style={{padding:"5px",width:"120px",height:"40px" }}>
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <hr/>
                      <li style={{padding:"5px",width:"120px",height:"40px" }}>
                        <NavLink to="/sign-in">Logout</NavLink>
                      </li>
                    </div>
                  </div>
                  
                </IconButton>
              
              {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                //  anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                //open={Boolean(anchorElUser)}
                // onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    //onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
