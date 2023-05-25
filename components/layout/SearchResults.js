import ShowCard from "../ShowCard";
import uuid from "react-uuid";
import { ThreeDots } from "react-loader-spinner";

const SearchResults = ({ searchValue, searchResults }) => {
  return (
    <>
      {" "}
      {!searchResults ? (
        <section
          className="showListContainer"
          style={{ display: "grid", placeContent: "center", padding: "5rem" }}
        >
          <ThreeDots
            height="60"
            width="60"
            radius="6"
            color="#fc4747"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </section>
      ) : (
        <section className="showListContainer">
          <h2 className="padding-inline fs-l-primary-heading fw-light">
            Found {searchResults.length} results for &lsquo;{searchValue}&rsquo;
          </h2>
          <div
            className={`showCardContainer ${
              searchResults.length <= 2 && "alignSearch"
            } | padding-inline padding-block-top padding-block-bottom`}
          >
            {searchResults.map((item) => (
              <ShowCard show={item} key={uuid()} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default SearchResults;
