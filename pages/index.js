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
        {/* 🛠: Your API endpoint to query is /api/profile */}
        {/* 🛠: Create a profile page for the user */}
        {/* 🛠: Additionally, show all of the user's recent posts */}
      </div>

    </main>
  )
}

export default Index