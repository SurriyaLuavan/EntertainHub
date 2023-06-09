import ScrollContainer from "react-indiana-drag-scroll";
import uuid from "react-uuid";
import ShowCard from "../ShowCard";

const Trending = ({ data: trendingCollection }) => {
  return (
    <section>
      <h1 className="padding-inline fs-l-primary-heading fw-light">Trending</h1>
      <ScrollContainer
        vertical={false}
        hideScrollbars={false}
        className="trendingShowContainer | padding-inline padding-block-top padding-block-bottom"
      >
        {trendingCollection.map((item) => (
          <ShowCard show={item} key={uuid()} container="trending" />
        ))}
      </ScrollContainer>
    </section>
  );
};

export default Trending;
