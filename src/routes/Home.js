import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
      {
        loading ? "Loading..." : 
          <div>
            {movies.map(movie => <Movie 
              coverImg={movie.medium_cover_image}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres} />)}
          </div>
      }
    </div>
  );
}
export default Home;