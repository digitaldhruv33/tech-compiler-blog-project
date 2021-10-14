import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    component:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        '& > *':{
            padding:16
        }
    },
    item:{
        padding:5
    }
})

function Navbar() {
    const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.component}>
          <Typography variant="h6">Dashboard</Typography>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="h6">Create Blog</Typography>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
