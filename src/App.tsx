import type { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import GlobalStore from './app/store';
import Header from './features/header/Header';

import { GetStaticPropsReturnVals } from '../apiUtils/apiTypes';
import IGPhotoFeed from './features/instagramfeed/IGFeed';
import MarqueeContainer from './features/marquee/MarqueeContainer';
import { Box } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sara Doehrman</title>
        <meta name="description" content="Created by James Hrivnak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          id="home-container"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            width: '75%',
            paddingBottom: '2.5rem',
          }}
        >
          <Header />
          <MarqueeContainer />
          <IGPhotoFeed />
        </Box>
      </main>
    </div>
  );
};

const App = (props: GetStaticPropsReturnVals) => {
  GlobalStore.prototype.configureGlobalStore({});

  return (
    <Provider store={GlobalStore.prototype.getStore()}>
      <Home />
    </Provider>
  );
};

export default App;
