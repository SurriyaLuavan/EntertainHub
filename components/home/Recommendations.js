import ShowCard from "../ShowCard";
import uuid from "react-uuid";

const Recommendations = ({ data: recommendCollection }) => {
  return (
    <section>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Recommended for you
      </h1>
      <div className="showCardContainer | padding-inline  padding-block-top padding-block-bottom">
        {recommendCollection.map((item) => (
          <ShowCard show={item} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
