import Link from 'next/link';
import React, { useState, useRef, useEffect, Fragment } from 'react';
import {
  Button,
  Avatar,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Details as DetailsIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  avatar : {
    width  : theme.spacing(5),
    height : theme.spacing(5)
  }
}));

const loggedInMenuItems = [
  { text : 'Join', link : '/join' },
  { text : 'Log In', link : '/login' }
];

const loggedOutMenuItems = [
  { text : 'My Calendar', link : '/calendar' }
];

export default function AvatarDropdownMenu(props : any) {
  const { isUserLoggedIn } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
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
    <div>
      <Button
        ref={ anchorRef }
        aria-controls={ open ? 'menu-list-grow' : undefined }
        aria-haspopup="true"
        onClick={ handleToggle }
      >
        {isUserLoggedIn ? (
          <Avatar className={ classes.avatar } alt="logged in user" src="https://robohash.org/lt" />
        ) : (
          <AccountCircleIcon className={ classes.avatar } />
        )
        }
        <DetailsIcon style={ { fontSize : 12 } } />
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
                  {isUserLoggedIn ? (
                    loggedOutMenuItems.map((menuItem, index) => {
                      return (
                        <MenuItem key={ index } onClick={ handleToggle }>
                          <Link href={ menuItem.link }>
                            { menuItem.text }
                          </Link>
                        </MenuItem>
                      );
                    })
                  ) : (
                    loggedInMenuItems.map((menuItem, index) => {
                      return (
                        <MenuItem key={ index } onClick={ handleToggle }>
                          <Link href={ menuItem.link }>
                            { menuItem.text }
                          </Link>
                        </MenuItem>
                      );
                    })
                  )
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
