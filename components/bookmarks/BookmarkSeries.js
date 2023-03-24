import { useShow } from "../contextProviders/ShowProvider";
import ShowCard from "../ShowCard";
import uuid from "react-uuid";

const BookmarkSeries = () => {
  const { bookmark, data } = useShow();

  const bookmarkedCollection = data.filter(
    (item, index) => bookmark[index].bookmarkStatus
  );
  const bookmarkedSeries = bookmarkedCollection.filter(
    (item) => item.category === "TV Series"
  );
  console.log(bookmarkedSeries.length);

  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked TV Series
      </h1>
      {bookmarkedSeries.length > 0 ? (
        <div
          className={`showCardContainer ${
            bookmarkedSeries.length <= 3 && "alignCard"
          } | padding-inline padding-block-top padding-block-bottom`}
        >
          {bookmarkedSeries.map((item) => (
            <ShowCard show={item} key={uuid()} />
          ))}
        </div>
      ) : (
        <p
          className="fs-m-primary-heading fw-light"
          style={{
            display: "grid",
            placeContent: "center",
            placeItems: "center",
            gridAutoRows: "15vh",
          }}
        >
          No bookmarked TV series
        </p>
      )}
    </article>
  );
};

export default BookmarkSeries;
