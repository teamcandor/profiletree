import Head from "next/head";
import styles from "./index.module.css";

const Index = () => {
  // 1: Your API endpoint to query is /api/profile (POST-only)
  // 2: Our API endpoint is RESTful - we can get a user by querying /api/profile/id with the Fetch API
  // 3: Get the user with the following ID: 1OuR3CWOEsfISTpFxsG7  (eg: api/profile/${id})
  // 4: Additionally, pass a POST body parameter: isFullProfile: true
  // 5: Can you implement local storage support (so we don't have to query profile each load)?
  // 6: Even better, can you implement local storage as a custom hook?

  // * Hint * - Don't forget to pass headers with your request

  const profileId = "1OuR3CWOEsfISTpFxsG7";

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
  );
};

export default Index;
