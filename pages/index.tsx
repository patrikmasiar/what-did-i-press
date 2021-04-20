// @ts-ignore
import styles from '../styles/Home.module.scss'
import Console from '../components/Console'
import KeyListenerContainer from '../components/KeyListenerContainer'
import Meta from '../components/Meta'
import Output from '../components/Output'
import { formatReadableEvent } from '../utils/utils'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <div className={styles.headerWrapper}>
          <img
            src="/keyboard.png"
            className={styles.headerImage}
            alt="Keyboard"
          />
          <h1 className={styles.title}>
            What did I press? 
          </h1>

          <p className={styles.description}>
            start by pressing any key on the keyboard
          </p>
        </div>

        <div style={{ marginTop: 30 }}>
          <KeyListenerContainer>
            {params => (
              <Console
                info={params.keyInfo}
              />
            )}
          </KeyListenerContainer>
        </div>
      </main>

      <KeyListenerContainer>
        {params => (
          <Output output={formatReadableEvent(params.keyInfo.output)} />
        )}
      </KeyListenerContainer>

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
    </div>
  )
}
