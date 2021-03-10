import { FC } from 'react';
import Head from 'next/head'

const setGoogleTags = () => {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NY3SNH44XP');
    `
  };
};

const Meta: FC = () => (
  <Head>
    <title>What key did I press | for developers</title>
    <link rel="icon" href="/favicon.ico" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NY3SNH44XP" />
    <script dangerouslySetInnerHTML={setGoogleTags()} />
  </Head>
);

export default Meta;
