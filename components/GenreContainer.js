import GenreCard from "./GenreCard";
import uuid from "react-uuid";

const GenreContainer = ({ data: currentGenreShows, category }) => {
  return (
    <div className="showListContainer">
      <div className="sectionWrapper">
        <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
          Genre{" "}
          <span className="categoryBlock | fs-m-body fw-regular">
            {category}
          </span>
        </h1>
        <div className="genreContainer | padding-inline padding-block-top">
          {currentGenreShows.map((item) => {
            return <GenreCard category={category} genre={item} key={uuid()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreContainer;
