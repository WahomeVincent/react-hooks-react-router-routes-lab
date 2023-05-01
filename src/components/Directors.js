import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
            <h1>Directors Page</h1>
            {directors.map(director => (
              <section key={director.id}>
                {director.name}
                <ul>
                  {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))}
                </ul>
              </section> 
            ))}
        </div>;
}

export default Directors;
