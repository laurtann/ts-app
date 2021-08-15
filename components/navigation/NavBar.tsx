import AvatarDropdownMenu from './AvatarDropdownMenu';
import HamburgerSideDrawer from './HamburgerSideDrawer';
import Link from 'next/link';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const isUserLoggedIn = true;

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow : 1
  },
  appBar : {
    background : 'white'
  },
  hamburgerMenu : {
    marginRight : theme.spacing(2),
    color       : 'black'
  },
  title : {
    flexGrow   : 1,
    color      : 'black',
    fontFamily : "'Lobster', cursive"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>

          <Link href="/" passHref>
            <Typography variant="h3" className={ classes.title }>
              SweatCal
            </Typography>
          </Link>

          <AvatarDropdownMenu
            isUserLoggedIn={ isUserLoggedIn }
          />

          <HamburgerSideDrawer />

        </Toolbar>
      </AppBar>
    </div>
  );
}
