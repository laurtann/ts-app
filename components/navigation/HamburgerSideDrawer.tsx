import Link from 'next/link';
import { useState, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, Mail as MailIcon, MoveToInbox as InboxIcon, Info as InfoIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  list : {
    width : 250
  },
  fullList : {
    width : 'auto'
  }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    top    : false,
    left   : false,
    bottom : false,
    right  : false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor] : open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={ clsx(classes.list, {
        [classes.fullList] : anchor === 'top' || anchor === 'bottom'
      }) }
      role="presentation"
      onClick={ toggleDrawer(anchor, false) }
      onKeyDown={ toggleDrawer(anchor, false) }
    >
      <List>
        <Link href="/about" passHref>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={ 'About' } />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={ text } />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <Fragment key={ anchor }>
          <Button onClick={ toggleDrawer(anchor, true) }>
            <MenuIcon />
          </Button>
          <Drawer anchor={ anchor } open={ state[anchor] } onClose={ toggleDrawer(anchor, false) }>
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
