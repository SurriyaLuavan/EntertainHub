import React from "react";
import Link from "next/link";
import Image from "next/image";

const GenreCard = ({ genre, category }) => {
  return (
    <Link
      href={`/${category === "Movie" ? "movies" : "tvseries"}/genre/${
        genre.id
      }`}
    >
      <div className="genreCardContainer">
        <div className="imageContainer">
          <Image
            src={genre.imageURL}
            alt="thumbnail"
            placeholder="blur"
            blurDataURL={"/assets/genre-placeholder.png"}
            fill={true}
            className="genreImage"
          />
        </div>
        <h2 className="fs-s-secondary-heading fw-regular text-neutral-100">
          {genre.name}
        </h2>
      </div>
    </Link>
  );
};

export default GenreCard;
