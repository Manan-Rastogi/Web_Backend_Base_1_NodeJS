import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState({
    id: 0,
    title: "Old PJ",
    joke: "An old man died in childhood.",
  });

  const handleJokeChange = (e) => {
    axios
      .get("/api/joke")
      .then((response) => {
        setJoke(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <>
      <div className="container" id={joke.id}>
        <h2 name="jokeTitle" className="jokeTitle">
          {joke.title}
        </h2>
        <div className="jokeContent">{joke.joke}</div>
        <hr />
        <button className="changeJoke" onClick={handleJokeChange}>
          Joke
        </button>
      </div>
    </>
  );
}

export default App;
