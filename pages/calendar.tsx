import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SweatCal</title>
        <meta name="description" content="A Workout Calendar for Creators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Typography variant="h1">Hello I am calendar</Typography>
    </div>
  );
}
