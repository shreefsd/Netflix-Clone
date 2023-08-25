import "./styles.css";
import Header from "./Header";
import Banner from "./Banner";
import MovieRow from "./MovieRow";
import Footer from "./Footer";
import React from "react";

export default function App() {
  const ApiKEY = "8f07cf07ca1dbb0a9f9a120f478501b9";
  const requests = {
    fecthTrending: `/trending/all/week?api_key=${ApiKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${ApiKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${ApiKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${ApiKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${ApiKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${ApiKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${ApiKEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${ApiKEY}&with_genres=99`
  };

  return (
    <div className="App">
      <Header />
      <Banner requests={requests} />
      <MovieRow
        Heading="Netflix Originals"
        searchlist={requests.fetchNetflixOriginals}
      ></MovieRow>
      <MovieRow Heading="Trending" searchlist={requests.fecthTrending} />
      <MovieRow Heading="Top Rated" searchlist={requests.fetchTopRated} />
      <MovieRow
        Heading="Action Movies"
        searchlist={requests.fetchActionMovies}
      />
      <MovieRow
        Heading="Comedy Movies"
        searchlist={requests.fetchComedyMovies}
      />
      <MovieRow
        Heading="Horror Movies"
        searchlist={requests.fetchHorrorMovies}
      />
      <MovieRow
        Heading="Romance Movies"
        searchlist={requests.fetchRomanceMovies}
      />
      <MovieRow
        Heading="Documentaries"
        searchlist={requests.fecthDocumentaries}
      />
      <Footer />
    </div>
  );
}
