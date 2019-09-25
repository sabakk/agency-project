import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userAction";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";

import UserAvatar from "../HOC/UserAvatar";
import { ReactComponent as Logo } from "../../resourses/logo/logo.svg";
import styles from "./NavBar.module.scss";

const NavBar = props => {
  const dispatch = useDispatch();
  const user1 = useSelector(state => state.user.avatar);
  useEffect(() => {
    dispatch(getUser());
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
      className=""
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["About me", "Relationships", "Requirements", "Users", "Sign up"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => scrollToElement(text)}>
              <ListItemText primary={text} className={styles.nav_item} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <nav>
      <Container>
        <AppBar position="fixed" className={styles.app_bar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <Hidden smDown>
              <div className={styles.menu}>{sideList()}</div>
              <UserAvatar user1={user1} />
            </Hidden>

            <Hidden mdUp>
              <IconButton
                edge="start"
                className=""
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Container>

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        <UserAvatar user1={user1} />
        <Divider />
        {sideList("left")}
      </Drawer>
    </nav>
  );
};

export default NavBar;
