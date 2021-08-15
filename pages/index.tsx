import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  ctaButton : {
    marginTop  : '5vh',
    fontFamily : "'Open Sans', sans-serif"
  },
  heroText : {
    maxWidth       : '50vw',
    fontFamily     : "'Lobster', cursive",
    textTransform  : 'none',
    alignSelf      : 'flex-start',
    justifyContent : 'center'
  },
  paper : {
    padding    : theme.spacing(2),
    textAlign  : 'center',
    color      : theme.palette.text.secondary,
    height     : '20vh',
    fontFamily : "'Open Sans', sans-serif"
  },
  heroSection : {
    marginBottom : theme.spacing(2)
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={ ` ${ styles.container } ${ styles.heroContainer } ${ classes.heroSection }` }>
        <Head>
          <title>SweatCal | Home</title>
          <meta name="description" content="A Workout Calendar for /n Creators" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Typography variant="h2" className={ classes.heroText }>The Fitness Calendar for Creators</Typography>
        <Link href="/about" passHref>
          <Button variant="contained" color="primary" className={ classes.ctaButton }>
            About SweatCal
          </Button>
        </Link>
      </div>

      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 }>
          <Paper className={ classes.paper }>Cool description</Paper>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Paper className={ classes.paper }>Picture</Paper>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Paper className={ classes.paper }>Picture</Paper>
        </Grid>
        <Grid item xs={ 6 } sm={ 3 }>
          <Paper className={ classes.paper }>Workout 1</Paper>
        </Grid>
        <Grid item xs={ 6 } sm={ 3 }>
          <Paper className={ classes.paper }>Workout 2</Paper>
        </Grid>
        <Grid item xs={ 6 } sm={ 3 }>
          <Paper className={ classes.paper }>Workout 3</Paper>
        </Grid>
        <Grid item xs={ 6 } sm={ 3 }>
          <Paper className={ classes.paper }>Workout</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
