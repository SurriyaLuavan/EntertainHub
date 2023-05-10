import ShowCard from "@/components/ShowCard";
import uuid from "react-uuid";

const TvSeriesContainer = ({ data: seriesCollection }) => {
  return (
    <div className="showListContainer">
      <div className="sectionWrapper">
        <h1 className="padding-inline fs-l-primary-heading fw-light">
          TV Series
        </h1>
        <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
          {seriesCollection.map((item) => (
            <ShowCard show={item} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvSeriesContainer;
