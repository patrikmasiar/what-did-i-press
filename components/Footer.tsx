import { FC } from 'react';
import styles from './footer/Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div>
      Created by 🚀{' '}
      <a
        href="https://patrikmasiar.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Patrik Mäsiar
      </a>
    </div>

    <div className={styles.links}>
      <a
        href="https://github.com/patrikmasiar/what-did-i-press"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github project
      </a>
      <a
        href="https://www.npmjs.com/package/react-keyboard-key"
        target="_blank"
        rel="noopener noreferrer"
      >
        NPM package
      </a>
    </div>
  </footer>
);

export default Footer;
