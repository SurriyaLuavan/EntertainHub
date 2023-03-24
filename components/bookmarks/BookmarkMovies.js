import { useShow } from "../contextProviders/ShowProvider";
import ShowCard from "../ShowCard";
import uuid from "react-uuid";

const BookmarkMovies = () => {
  const { bookmark, data } = useShow();
  const bookmarkedCollection = data.filter(
    (item, index) => bookmark[index].bookmarkStatus
  );
  const bookmarkedMovies = bookmarkedCollection.filter(
    (item) => item.category === "Movie"
  );
  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked Movies
      </h1>
      {bookmarkedMovies.length > 0 ? (
        <div
          className={`showCardContainer ${
            bookmarkedMovies.length <= 3 && "alignCard"
          } | padding-inline padding-block-top padding-block-bottom`}
        >
          {bookmarkedMovies.map((item) => (
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
          No bookmarked movies
        </p>
      )}
    </article>
  );
};

export default BookmarkMovies;
