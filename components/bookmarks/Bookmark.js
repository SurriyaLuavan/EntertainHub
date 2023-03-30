import { useShow } from "@/components/context/ShowProvider";
import ShowCard from "@/components/ShowCard";
import uuid from "react-uuid";
import { useAuth } from "../context/AuthProvider";

const Bookmark = ({ category }) => {
  const { bookmark, data } = useShow();
  const bookmarkedCollection = data.filter(
    (item, index) => bookmark[index].bookmarkStatus
  );
  const bookmarked = bookmarkedCollection.filter(
    (item) => item.category === category
  );

  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked {category === "Movie" ? "Movies" : "TV Series"}
      </h1>
      {bookmarked.length > 0 ? (
        <div
          className={`showCardContainer ${
            bookmarked.length <= 3 && "alignCard"
          } | padding-inline padding-block-top padding-block-bottom`}
        >
          {bookmarked.map((item) => (
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
          No bookmarked {category === "Movie" ? "Movies" : "TV series"}
        </p>
      )}
    </article>
  );
};

export default Bookmark;
