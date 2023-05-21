import React from "react";
import ShowCard from "../ShowCard";
import uuid from "react-uuid";
import Image from "next/image";
import Link from "next/link";
// import { tvGenreList, movieGenreList } from "@/data/genres";

const ListContainer = ({ title, category, data }) => {
  const initalData = data.filter((item, index) => index < 6);
  return (
    <section>
      <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
        {title}{" "}
        <span className="categoryBlock | fs-m-body fw-regular">{category}</span>
      </h1>
      <Link href={"/movies/now_playing"}>See More</Link>
      <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
        {initalData.map((item) => (
          <ShowCard show={item} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default ListContainer;
