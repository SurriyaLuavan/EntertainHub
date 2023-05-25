import React from "react";
import ShowCard from "../ShowCard";
import uuid from "react-uuid";
import Link from "next/link";

const ListContainer = ({ title, category, data, pathname }) => {
  const initalData = data.filter((_, index) => index < 8);
  return (
    <section>
      <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
        {title}{" "}
        <span className="categoryBlock | fs-m-body fw-regular">{category}</span>
      </h1>
      <Link
        href={`/${category === "Movie" ? "movies" : "tvseries"}/${pathname}`}
      >
        See More
      </Link>
      <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
        {initalData.map((item) => (
          <ShowCard show={item} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default ListContainer;
