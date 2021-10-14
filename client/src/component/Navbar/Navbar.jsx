import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      padding: 16,
      textDecoration: "none",
    },
  },
  item: {
    padding: 5,
    textDecoration: "none",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.component}>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            <Typography variant="h6">Home</Typography>
          </NavLink>
          <NavLink
            to="/aboutus"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            <Typography variant="h6">About Us</Typography>{" "}
          </NavLink>
          <NavLink
            to="/addblog"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            <Typography variant="h6">Create Blog</Typography>{" "}
          </NavLink>
          
            <Typography variant="h6"><NavLink to="/login" exact>Login </NavLink> </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
