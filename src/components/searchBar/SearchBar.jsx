import { useState } from "react";
import s from "./SearchBar.module.css";
/*import { MdImageSearch } from "react-icons/md";*/

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(value);
  };


  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <div className={s.search}>
    <input
    onChange={e => setValue(e.target.value)} value={value}
      type="text"
      placeholder="Search images and photos" 
      className={s.searchInput}
      
    />
    <button type="submit" className={s.searchBtn}>Search</button>
    </div>
  </form>
  );
};
 
export default SearchBar;

