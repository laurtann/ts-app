import { Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  footer : {
    backgroundColor : '#ffffff',
    color           : '#000000',
    backgroundImage : `url("https://www.transparenttextures.com/patterns/arches.png")`,
    height          : '10vh',
    marginTop       : '3vh'
  }
}));

export default function Footer () {
  const classes = useStyles();
  return (
    <footer className={ classes.footer }>
      {/* <Typography variant="h6" align="center" color="light" gutterBottom>
        Thanks for Stopping By!
      </Typography> */}
      {/* <Grid container spacing={ 2 } justify="center">
        <SocialLinks />
      </Grid> */}
      <Copyright />
    </footer>
  );
}
