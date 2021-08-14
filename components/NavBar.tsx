import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button, IconButton, Avatar } from '@material-ui/core';
import { Menu as MenuIcon, Details as DetailsIcon } from '@material-ui/icons';
import React, { useState, useRef, useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const isUserLoggedIn = false;

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow : 1,
  },
  appBar : {
    background : 'white',
  },
  avatarButton : {
    display    : 'flex',
    alignItems : 'center'
  },
  hamburgerMenu : {
    marginRight : theme.spacing(2),
    color       : 'black'
  },
  title : {
    flexGrow   : 1,
    color      : 'black',
    fontFamily : "'Lobster', cursive"
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event : React.MouseEvent<any>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event : React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // Return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



  return (
    <div className={ classes.root }>
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>

          <Link href="/" passHref>
            <Typography variant="h3" className={ classes.title }>
              SweatCal
            </Typography>
          </Link>

          <div>
            <Button
              ref={ anchorRef }
              aria-controls={ open ? 'menu-list-grow' : undefined }
              aria-haspopup="true"
              onClick={ handleToggle }
            >
              <Avatar alt="Login" src="https://robohash.org/lt" />
              <DetailsIcon style={ { fontSize : 12 } }/>
            </Button>
            <Popper open={ open } anchorEl={ anchorRef.current } role={ undefined } transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  { ...TransitionProps }
                  style={ { transformOrigin : placement === 'bottom' ? 'center top' : 'center bottom' } }
                >
                  <Paper>
                    <ClickAwayListener onClickAway={ handleClose }>
                      <MenuList autoFocusItem={ open } id="menu-list-grow" onKeyDown={ handleListKeyDown }>
                        <MenuItem onClick={ handleClose }>Join</MenuItem>
                        <MenuItem onClick={ handleClose }>Sign In</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          <IconButton edge="end" className={ classes.hamburgerMenu } aria-label="menu">
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}