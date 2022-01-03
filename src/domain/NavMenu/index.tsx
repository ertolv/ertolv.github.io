import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { theme } from "../../utils/theme";

const useStyles = makeStyles(() => ({
  navlinks: {
    marginRight: 3,
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: 35,
    "&:hover": {
      color: "orange",
      borderBottom: "1px solid white",
      background: "gray",
      px: 15,
    },
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

function NavMenu() {
  const classes = useStyles();
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ marginBottom: 1, bgcolor: theme.color.thunderCloud }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Demo
        </Typography>
        {isMobile ? (
           <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/blog" className={classes.link}>
              Blog
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NavMenu;