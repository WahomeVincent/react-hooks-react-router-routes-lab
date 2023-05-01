import React from "react";
import { movies } from "../data";

function Movies() {
  return <>{/*{code here}*/}
            <h1>Movies Page</h1>
            <section>
              {movies.map(movie => (
                <section key={movie.id}>
                  <h2>{movie.title}</h2>
                  <p>{movie.time}</p>
                  <ul>
                    {movie.genres.map((genre, index) =>(
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </section>

        </>;
}

export default Movies;
