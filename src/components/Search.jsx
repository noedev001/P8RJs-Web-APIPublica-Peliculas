import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "../hooks/useQuery";
export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchtext] = useState("");
  const historia = useHistory();

  useEffect(() => {
    setSearchtext(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    historia.push("/?search=" + searchText);
  };
  return (
    <form className={styles.searchcontainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}