import { useRouter } from "next/router";

const SearchResults = ({ searchValue }) => {
  const router = useRouter();
  const { bookmark } = useShow();
  const regex = new RegExp(`\\b${searchValue}\\w*\\b`);
  let collection;
  return <div>Enter</div>;
};

export default SearchResults;
