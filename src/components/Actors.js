import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
            <h1>Actors Page</h1>
                {actors.map(actor => (
                  <section key={actor.id}>
                  <p>{actor.name}</p>
                  <ul>
                      {actor.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                      ))}
                  </ul>
                  </section>
                ))}
            
        </div>;
}

export default Actors;
