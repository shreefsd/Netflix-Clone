import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Banner({ requests }) {
  const [movies, setMovies] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
      .then((result) => {
        setMovies(() => {
          return result.data.results;
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (idx === movies.length - 1) {
        setIdx(0);
      } else {
        setIdx(idx + 1);
      }
    }, 5000);
  });

  return (
    <div
      className="banner"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
          movies
            ? movies[idx].backdrop_path
            : "/mAXOCbZzvmDa6PCh5dcIPOB51Qc.jpg"
        }")`,
        transition: "all 1s ease-in-out",
        marginBottom: "25px"
      }}
    >
      <div
        className="bannerText"
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          padding: "22vh 0 0 75px",
          gap: "20px",
          maxWidth: "500px",
          color: "white"
        }}
      >
        <p>Duration: {Math.floor(Math.random() * (150 - 125) + 125)}m</p>
        <p>
          ⭐ {movies ? movies[idx].vote_average : "8.5"}{" "}
          <span style={{ textTransform: "uppercase" }}>
            {movies ? movies[idx].original_language : "en"}
          </span>
        </p>
        <h1>
          {movies ? movies[idx].name : "Inside Christopher Nolan's Oppenheimer"}
        </h1>
        <p>
          {movies
            ? movies[idx].overview
            : "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape."}
        </p>
      </div>
    </div>
  );
}
