import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button, IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const isUserLoggedIn = true;

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow : 1,
  },
  appBar : {
    background : 'white',
  },
  menuButton : {
    marginRight : theme.spacing(2),
    color       : 'black',
  },
  title : {
    flexGrow   : 1,
    color      : 'black',
    fontFamily : "'Lobster', cursive"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SweatCal
          </Typography>
          { !isUserLoggedIn ?
            (<Button>Login</Button>) :
            (<Avatar alt="Name of User" src="https://robohash.org/lt" />)
          }
          <IconButton edge="end" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}