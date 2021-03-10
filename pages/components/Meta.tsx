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
    <meta charSet="utf-8" />
    <title>What key did I press | for developers</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="author" content="Patri Masiar" />
    <meta name="keywords" content="keyboard, key, what did i press, development, frontend, keycodes, key code, code, coding, javascript, react, full stack" />
    <meta name="description" content="Application for developers that tells you what key on the keyboard did you press." key="description" />
    <meta name="twitter:title" content="What key did I press | for developers" key="title-twitter" />
    <meta name="og:title" content="What key did I press | for developers" key="title-fb" />
    <meta name="twitter:description" content="Application for developers that tells you what key on the keyboard did you press." key="description-twitter" />
    <meta name="og:description" content="Application for developers that tells you what key on the keyboard did you press." key="description-fb" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NY3SNH44XP" />
    <script dangerouslySetInnerHTML={setGoogleTags()} />
  </Head>
);

export default Meta;
