import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cards from "./Cards";

function ListMovies(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "black",
      }}
    >
      { props.login ?  props.moviedata
        .filter((el) =>
          el.title.toUpperCase().includes(props.search.toUpperCase()) 
          &&
          props.rate <= el.rate 
        )
        .map((el) => (
          <Cards el={el}></Cards>
        ))
        : <Redirect to='/' > </Redirect>
       }
    </div>
  );
}

export default ListMovies;
