// @ts-ignore
import styles from '../../styles/Home.module.scss'
import Meta from '../../components/Meta'

export default function Events() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://masso.sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{' '}
            <img
              src="https://masso.sk/_next/static/images/logo_main-c93cc7869fc2c2f29b3faa446d466448.png"
              alt="Masso dev. logo"
              className={styles.logo}
            />
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
    </div>
  )
}
