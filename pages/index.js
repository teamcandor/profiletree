import Head from 'next/head'
import styles from './index.module.css'

const Index = () => {

  // 1: Your API endpoint to query is /api/profile
  // 2: Our API endpoint accepts a query parameter => id | string
  // 3: Get the user with the following ID: 1OuR3CWOEsfISTpFxsG7

  return (
    <main>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* 🛠: Create a profile page for the user */}
        {/* 🛠: Additionally, show all of the user's recent posts */}
      </div>

    </main>
  )
}

export default Index