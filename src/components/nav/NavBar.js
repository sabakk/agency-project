import React, { useEffect } from "react";
import { scroller, Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/userAction";
import { getToken } from "../../actions/tokenAction";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { Container, Grid } from "@material-ui/core";

import UserAvatar from "../HOC/UserAvatar";
import { ReactComponent as Logo } from "../../resourses/logo/logo.svg";
import { ReactComponent as Hamburger } from "../../resourses/icons/line-menu.svg";
import styles from "./NavBar.module.scss";

const NavBar = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getToken());
  }, [dispatch]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    });
    toggleDrawer("left", false);
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ul>
        {["About me", "Relationships", "Requirements", "Users", "Sign up"].map(
          (text, index) => (
            <li key={text} onClick={() => scrollToElement(text)}>
              <Link
                activeClass={styles.scroll}
                to={text}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
              >
                {text}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <nav>
      <AppBar position="fixed" className={styles.app_bar}>
        <Toolbar className={styles.toolbar}>
          <Container>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6} md={2}>
                <div className={styles.logo}>
                  <Logo />
                </div>
              </Grid>
              <Hidden smDown>
                <Grid item md={7}>
                  <div className={styles.desktop_nav}>{sideList()}</div>
                </Grid>
                <Grid item md={3}>
                  <UserAvatar />
                </Grid>
              </Hidden>

              <Hidden mdUp>
                <Hamburger
                  onClick={toggleDrawer("left", true)}
                  className={styles.hamburger}
                />
              </Hidden>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        <UserAvatar className={styles.mobile_avatar} />
        <Divider />
        <div className={styles.mobile_nav}>{sideList("left")}</div>
      </Drawer>
    </nav>
  );
};

export default NavBar;
