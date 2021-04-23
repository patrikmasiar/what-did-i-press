// @ts-ignore
import styles from '../../styles/Home.module.scss'
import Meta from '../../components/Meta'
import Footer from '../../components/Footer'
import Table from '../../components/docs/events/Table'

export default function Events() {

  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <Table />
      </main>

      <Footer />
    </div>
  )
}
