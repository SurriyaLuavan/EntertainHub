import React from "react";
import ShowCard from "../ShowCard";
import uuid from "react-uuid";
import Link from "next/link";

const ListContainer = ({ title, category, data, pathname }) => {
  const initalData = data.filter((_, index) => index < 8);
  return (
    <section className="listContainer | padding-inline padding-block-bottom">
      <div className="titleContainer">
        <h1 className="headingContainer | fs-l-primary-heading fw-light">
          {title}{" "}
          <span className="categoryBlock | fs-m-body fw-regular">
            {category}
          </span>
        </h1>
        <Link
          href={`/${category === "Movie" ? "movies" : "tvseries"}/${pathname}`}
          className="moreButton | fs-m-body fw-regular"
        >
          See More
        </Link>
      </div>
      <div className="showCardContainer | padding-block-top">
        {initalData.map((item) => (
          <ShowCard show={item} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default ListContainer;
