import React from "react";
import uuid from "react-uuid";
import ListContainer from "./ListContainer";

const MovieCollections = ({ movieCollection }) => {
  return (
    <>
      {movieCollection.map((item) => (
        <ListContainer
          key={uuid()}
          title={item.title}
          category={item.category}
          data={item.data}
          pathname={item.pathname}
        />
      ))}
    </>
  );
};

export default MovieCollections;
