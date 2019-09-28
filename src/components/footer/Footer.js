import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { scroller, animateScroll as scroll } from "react-scroll";

import { ReactComponent as Logo } from "../../resourses/logo/logo.svg";
import { ReactComponent as Mail } from "../../resourses/icons/mail.svg";
import { ReactComponent as Cellphone } from "../../resourses/icons/cellphone.svg";
import { ReactComponent as Phone } from "../../resourses/icons/phone.svg";
import { ReactComponent as Facebook } from "../../resourses/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../resourses/icons/linkedin.svg";
import { ReactComponent as Instagram } from "../../resourses/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../resourses/icons/twitter.svg";
import { ReactComponent as Pinterest } from "../../resourses/icons/pinterest.svg";
import styles from "./Footer.module.scss";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const scrollToElement = element => {
  scroller.scrollTo(element, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -60
  });
};

const nav = [
  "About me",
  "Relationships",
  "Requirements",
  "Users",
  "Sign up"
].map(text => (
  <Typography
    key={text}
    onClick={() => scrollToElement(text)}
    variant="body1"
    className={styles.navigation}
  >
    {text}
  </Typography>
));

const Footer = () => {
  return (
    <div className={styles.footer_bg}>
      <div className={styles.container}>
        <div className={styles.footer_container}>
          <div>
            <Logo className={styles.footer_logo} onClick={scrollToTop} />
          </div>
          <div className={styles.footer_container}>{nav}</div>
        </div>
        <Divider className={styles.divider} />

        <div className={styles.footer_container}>
          <div>
            <div className={styles.contacts_wrapper}>
              <Mail className={styles.icons} />
              <Typography variant="body1" className={styles.contacts}>
                work.of.future@gmail.com
              </Typography>
            </div>
            <div className={styles.contacts_wrapper}>
              <Phone className={styles.icons} />
              <Typography variant="body1" className={styles.contacts}>
                +38 (050) 789 24 98
              </Typography>
            </div>
            <div className={styles.contacts_wrapper}>
              <Cellphone className={styles.icons} />
              <Typography variant="body1" className={styles.contacts}>
                +38 (095) 556 08 45
              </Typography>
            </div>
          </div>
          <div className={styles.footer_d_none}>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              News
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Overview
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Tutorials
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              FAQ
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Blog
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Design
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Resources
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Terms
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Partners
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Code
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Guides
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Conditions
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Shop
            </Typography>

            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Collaborate
            </Typography>

            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Examples
            </Typography>

            <Typography
              variant="body1"
              align="right"
              className={styles.directions}
            >
              Help
            </Typography>
          </div>
        </div>
        <div className={styles.footer_container}>
          <div className={styles.f_25}>
            <Typography variant="body1" className={styles.caption}>
              © abz.agency specially for the test task
            </Typography>
          </div>
          <div className={styles.f_25}>
            <a href="#" className={styles.social}>
              <Facebook />
            </a>
            <a href="#" className={styles.social}>
              <Linkedin />
            </a>
            <a href="#" className={styles.social}>
              <Instagram />
            </a>
            <a href="#" className={styles.social}>
              <Twitter />
            </a>
            <a href="#" className={styles.social}>
              <Pinterest />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
