import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const links = [
  { title: `Api Test`, path: `/apitest` },
  { title: `About`, path: `/about` },
]

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `flex-start`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `flex-start`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>

              <Link href="/" passHref>
                <IconButton edge="start" color="inherit" aria-label="home">
                  <Home fontSize="large" />
                </IconButton>
              </Link>


              <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
              >
                {links.map(({ title, path }) => (
                    <Link href={path} passHref>
                      <a key={title} className={classes.linkText}>
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                      </a>
                    </Link>
                ))}
              </List>

            </Container>
          </Toolbar>
        </AppBar>
    );
}

export default Header;
