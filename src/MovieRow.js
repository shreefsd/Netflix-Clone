import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MovieRow({ Heading, searchlist }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${searchlist}`)
      .then((result) => {
        setMovies(result.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={
        Heading === "Netflix Originals" ? "movieRow" : "movieRow  Originals"
      }
    >
      <h2>{Heading}</h2>
      <div className="movieContainer">
        {movies.map((movie, idx) => (
          <img
            key={idx}
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt="Movie_Title"
          />
        ))}
      </div>
    </div>
  );
}
