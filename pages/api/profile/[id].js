import axios from "axios"

export default async (req, res) => {

  const { method } = req
  const { id } = req.query

  const getPerson = async () => {
    if (id !== "1OuR3CWOEsfISTpFxsG7") {
      res.status(500).send("Invalid user id")
      return
    }

    const person = {
      id: '1OuR3CWOEsfISTpFxsG7',
      name: 'James Bond',
      role: 'Software Engineer',
      company: 'Facebook',
      posts: [
        {
          title: 'How to Write a Software Engineer Cover Letter',
          image: 'https://images.unsplash.com/photo-1461681334529-b7210750c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80'
        },
        {
          title: '5 Pre-IPO Companies to Send Your Resume to in 2020',
          image: 'https://images.unsplash.com/photo-1607041409099-bd92431680a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
        },
        {
          title: 'Becoming an Engineering Manager in Silicon Valley',
          image: 'https://images.unsplash.com/photo-1609383645129-c777c3a5c7e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80'
        }
      ]
    }
    
    res.status(200).send(person)
  }


  switch (method) {
    case "GET":
      await getPerson()
      break
    default:
      res.setHeader("Allow", ["GET"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
