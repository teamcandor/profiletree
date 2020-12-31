import Head from 'next/head'
import styles from './index.module.css'

const Index = () => {

  return (
    <main>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Hint: Create a component for profile */}
      </div>

    </main>
  )
}

export default Index
