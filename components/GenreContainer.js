import GenreCard from "./GenreCard";
import uuid from "react-uuid";

const GenreContainer = ({ data: currentGenreShows, category }) => {
  return (
    <div className="showListContainer">
      <div className="sectionWrapper">
        <h1 className="padding-inline fs-l-primary-heading fw-light">
          {category} Genre
        </h1>
        <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
          {currentGenreShows.map((item) => {
            return <GenreCard category={category} genre={item} key={uuid()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreContainer;
