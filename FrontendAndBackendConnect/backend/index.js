// Import the express module
import express from "express";

// Create an instance of express
const app = express();

// some jokes
const programmingJokes = [
  {
    id: 1,
    title: "Dark Mode",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
  },
  {
    id: 2,
    title: "Light Bulb",
    joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  },
  {
    id: 3,
    title: "Java Developers",
    joke: "Why do Java developers wear glasses? Because they don't C#.",
  },
  {
    id: 4,
    title: "JavaScript Feelings",
    joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
  },
  {
    id: 5,
    title: "Python Programmers",
    joke: "Why do Python programmers prefer snakes? Because they love to 'import' them.",
  },
  {
    id: 6,
    title: "Nature",
    joke: "Why do programmers hate nature? It has too many bugs.",
  },
  {
    id: 7,
    title: "Nerdic",
    joke: "What do you call a programmer from Finland? Nerdic.",
  },
  {
    id: 8,
    title: "Arrays",
    joke: "Why did the programmer quit his job? Because he didn't get arrays.",
  },
  {
    id: 9,
    title: "Christmas and Halloween",
    joke: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  },
  {
    id: 10,
    title: "JavaScript Bug",
    joke: "How do you comfort a JavaScript bug? You console it.",
  },
];

// Define a port number
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// serve random joke
app.get("/api/joke", (req, res) => {
  let max = 9;
  let min = 0;
  const jokeId = Math.floor((max - min) * Math.random() + min);

  res.json(programmingJokes[jokeId]);
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
