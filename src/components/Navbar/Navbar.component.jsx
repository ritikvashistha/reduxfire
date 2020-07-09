import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../configs/firebase.config";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { deepOrange } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  roots: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menu: {
    margin: 32,
    marginLeft: -23,
  },
  sidebar: {
    // backgroundColor: "red",
    textTransform: "capitalize",
    fontFamily: "cursive",
    "&:hover": {
      backgroundColor: deepOrange[200],
    },
  },
}));

const Navbar = ({ currentUser }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavWrapper className={classes.root}>
      <AppBar className={classes.roots}>
        <Toolbar variant="dense" className="font">
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > */}
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />

          <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {" "}
            <MenuItem onClick={handleClose} className={classes.sidebar}>
              <NavLink className="link" to="/homepage">
                Home page
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.sidebar}>
              <NavLink to="/imagespage">Images Page</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.sidebar}>
              <NavLink to="/postspage">Posts Page</NavLink>
            </MenuItem>
            {currentUser && currentUser ? (
              <MenuItem onClick={handleClose} className={classes.sidebar}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => auth.signOut()}
                >
                  Sign out
                </Button>
              </MenuItem>
            ) : (
              <div>
                <MenuItem onClick={handleClose} className={classes.sidebar}>
                  <NavLink to="/sign-in">Sign In</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.sidebar}>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </MenuItem>
              </div>
            )}
          </Menu>
          {/* </IconButton> */}
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </NavWrapper>

    // <div className="navbar">
    //   <div className="navbar__logo"></div>
    //   <div className="navbar__links">
    //     <ul>

    //       <li>
    //         <NavLink to="/homepage">homepage</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/imagespage">imagespage</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/postspage">postsspage</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/albumspage">albumspage</NavLink>
    //       </li>
    //       {currentUser && currentUser ? (
    //         <>
    //           <li>
    //             <button onClick={() => auth.signOut()}>Sign out</button>
    //           </li>
    //         </>
    //       ) : (
    //         <>
    //           {" "}
    //           <li>
    //             <NavLink to="/sign-in">Sign In</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to="/sign-up">Sign Up</NavLink>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(Navbar);

const NavWrapper = styled.div`
  text-transform: capitalize;
  font-family: cursive;
  .link {
    text-transform: capitalize;
  }
`;
