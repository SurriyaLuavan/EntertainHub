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
      <div>
        <Image src={genre.imageURL} alt="" width={150} height={150} />
        <h2>{genre.name}</h2>
      </div>
    </Link>
  );
};

export default GenreCard;
