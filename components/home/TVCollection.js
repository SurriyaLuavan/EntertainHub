import React from "react";
import uuid from "react-uuid";
import ListContainer from "./ListContainer";

const TVCollections = ({ tvCollection }) => {
  return (
    <>
      {tvCollection.map((item) => (
        <ListContainer
          key={uuid()}
          title={item.title}
          category={item.category}
          data={item.data}
        />
      ))}
    </>
  );
};

export default TVCollections;
