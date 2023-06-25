import ShowCard from "@/components/ShowCard";
import uuid from "react-uuid";
import { CircularProgress } from "@mui/material";
import { useBookmark } from "@/context/BookmarkProvider";

const Bookmark = ({ category }) => {
  const { bookmark } = useBookmark();
  const bookmarked = bookmark.filter((item) => item.media_type === category);

  return (
    <article>
      <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
        Bookmarks{" "}
        <span className="categoryBlock | fs-m-body fw-regular">{category}</span>
      </h1>
      {bookmarked.length > 0 ? (
        false ? (
          <div style={{ display: "grid", placeContent: "center" }}>
            <CircularProgress
              sx={{
                color: "red",
              }}
            />
          </div>
        ) : (
          <div
            className={`showCardContainer ${
              bookmarked.length <= 3 && "alignCard"
            } | padding-inline padding-block-top padding-block-bottom`}
          >
            {bookmarked.map((item) => (
              <ShowCard show={item} key={uuid()} />
            ))}
          </div>
        )
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
