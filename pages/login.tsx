import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';

export default function LogIn() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Login</title>
        <meta name="description" content="Log in to SweatCal: A Workout Calendar for Creators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1">Hello I am login</Typography>
    </div>
  );
}
