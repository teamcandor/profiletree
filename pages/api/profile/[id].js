export default async (req, res) => {

  const { method } = req
  const { id } = req.query

  const getPerson = async () => {
    if (id !== "1OuR3CWOEsfISTpFxsG7") {
      res.status(500).send("Invalid user id")
      return
    }

    if (!req.body.isFullProfile) {
      res.status(500).send("Must query full profile")
      return
    }

    const person = {
      id: '1OuR3CWOEsfISTpFxsG7',
      name: 'James Bond',
      role: 'Software Engineer',
      image: 'https://pbs.twimg.com/profile_images/666991518121508864/sLu9f6s7_400x400.jpg',
      company: 'Facebook',
      posts: [
        {
          title: 'How to Write a Software Engineer Cover Letter',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: '5 Pre-IPO Companies to Send Your Resume to in 2020',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Becoming an Engineering Manager in Silicon Valley',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
    
    res.status(200).send(person)
  }


  switch (method) {
    case "POST":
      await getPerson()
      break
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
