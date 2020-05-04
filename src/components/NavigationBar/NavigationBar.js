import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import taphouselogo from "../../assets/img/taphouselogo.png";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  center: {
    justifyContent: "center",
  },
  navLinks: {
    color: "white",
    textDecoration: "none",
  },
  navbar: {
    backgroundColor: "#00acee",
  },
}));

const NavigationBar = () => {
  // const user = useSelector((state) => state.authentication.user);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const auth = firebase.auth();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
          to={`/login`}
        >
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
          to={`/ontap`}
        >
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
          to={`/ontap`}
        >
          On Tap
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
          to={`/about`}
        >
          About
        </Link>
      </MenuItem>
      {isLoaded(auth) && auth.currentuser == null ? (
        <MenuItem>
          <Link
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            to={`/login`}
          >
            Login
          </Link>
        </MenuItem>
      ) : (
        <MenuItem>
          <Link
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            to={`/login`}
          >
            Logout
          </Link>
        </MenuItem>
      )}
      {isLoaded(auth) && auth.currentuser != null ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <Link
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            to={`/profile`}
          >
            Profile
          </Link>
        </MenuItem>
      ) : null}
    </Menu>
  );

  return (
    <div>
      <AppBar style={{ backgroundColor: "#cc7000" }} position="static">
        <Toolbar>
          <Link to={"/"}>
            <img
              style={{ height: "100px", width: "auto" }}
              src={taphouselogo}
            ></img>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              style={{
                color: "white",
                marginRight: "50",
              }}
              href={`/`}
            >
              Home
            </Button>
            <Button
              style={{
                color: "white",
                marginRight: "50",
              }}
              href={`/ontap`}
            >
              On Tap
            </Button>
            <Button
              style={{
                color: "white",
                marginRight: "50",
              }}
              href={`/about`}
            >
              About
            </Button>
            {isLoaded(auth) && auth.currentuser != null ? (
              <Button
                className={classes.navLinks}
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
              >
                Account
              </Button>
            ) : (
              <Button style={{ color: "white" }} href={`/login`}>
                Login
              </Button>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export { NavigationBar };
