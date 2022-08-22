// Import Express
import express from 'express';

// Initialize the Engine engine
const app: express.Application = express();

// Setup Port 4000 for the server to run
const PORT: string = process.env.PORT || '4000';

// Trailer list
const trailerList = [
  {
    id: 1,
    trailerName: "Minions: The Rise of Gru",
    trailerDescription: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    videoUrl: "https://www.youtube.com/embed/6DxjJzmYsXo",
    videoReleaseDate: "Mar 30, 2022",
    imageUrl: "https://cdn.themovieseries.net/cover/minions-the-rise-of-gru.png"
  },
  {
    id: 2,
    trailerName: "Titanic",
    trailerDescription: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    videoUrl: "https://www.youtube.com/embed/CHekzSiZjrY",
    videoReleaseDate: "Jun 25, 2015",
    imageUrl: "https://cdn.themovieseries.net//titanic-jxq/cover.png"
  },
  {
    id: 3,
    trailerName: "Fight Club",
    trailerDescription: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    videoUrl: "https://www.youtube.com/embed/qtRKdVHc-cE",
    videoReleaseDate: "Nov 22, 2017",
    imageUrl: "https://cdn.themovieseries.net/cover/fight-club.png"
  },
  {
    id: 4,
    trailerName: "Spider-Man: Far from Home",
    trailerDescription: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    videoUrl: "https://www.youtube.com/embed/Nt9L1jCKGnE",
    videoReleaseDate: "May 6, 2019",
    imageUrl: "https://cdn.themovieseries.net/cover/spider-man-far-from-home.png"
  },
  {
    id: 5,
    trailerName: "Peaky Blinders - Season 3",
    trailerDescription: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    videoUrl: "https://www.youtube.com/embed/t5D4-nTAWLY",
    videoReleaseDate: "May 19, 2016",
    imageUrl: "https://cdn.themovieseries.net//peaky-blinders-season-3-jsv/cover.png"
  },
  {
    id: 6,
    trailerName: "The Batman",
    trailerDescription: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    videoUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
    videoReleaseDate: "Oct 16, 2021",
    imageUrl: "https://cdn.themovieseries.net/cover/the-batman.png"
  },
  {
    id: 7,
    trailerName: "Breaking Bad - Season 1",
    trailerDescription: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    videoUrl: "https://www.youtube.com/embed/yAAphfWE3Vs",
    videoReleaseDate: "Jan 17, 2018",
    imageUrl: "https://cdn.themovieseries.net//breaking-bad-season-1-hsh/cover.png"
  },
  {
    id: 8,
    trailerName: "The Queen's Gambit",
    trailerDescription: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    videoUrl: "https://www.youtube.com/embed/oZn3qSgmLqI",
    videoReleaseDate: "Sep 24, 2020",
    imageUrl: "https://cdn.themovieseries.net/cover/the-queens-gambit-season-1.png"
  },
  {
    id: 9,
    trailerName: "Once Upon a Time in Hollywood",
    trailerDescription: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    videoUrl: "https://www.youtube.com/embed/ELeMaP8EPAA",
    videoReleaseDate: "May 21, 2019",
    imageUrl: "https://cdn.themovieseries.net/cover/once-upon-a-time-in-hollywood.png"
  }
]

// Basic Handling of server home page
app.get('/', (req, res) => {
    res.send("TypeScript with Express!");
})

// API handling
app.get('/api', (req, res) => {
    res.send("This is the API!")
})

// Custom API Url Handling
app.get('/api/basic-api-data', (req, res) => {
    res.status(200).send({api: "Base shit", size: "API SIZE!"})
})

// Custom Trailer list API
app.get('/api/trailers/', (req, res) => {
    res.status(200).send(trailerList)
})

app.get('/api/trailers/:id', (req, res) => {
  let response = {}
  let idFound = false
   for (let i = 0; i < trailerList.length; i++) {
    if (parseInt(req.params.id) === trailerList[i].id) {
      response = trailerList[i]
      idFound = true
    }
   }
   if (idFound) {
    res.status(200).send(response)
   }
   else {
    res.status(400).send('No match')
   }
})

// Server setup
app.listen(PORT, () => {
    console.log(`TypeScript with Express server started at port: ${PORT}`)
})

