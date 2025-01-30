
import s from "./SearchBox.module.css"

const SearchBox = ({ value, searchChange }) => (
  <div className={s.searchForm}>
    <label className={s.searchLabel}>Find contacts by name</label>
    <input
      type="text"
      value={value}
      onChange={searchChange}
      className={s.inputLabel}
    />
  </div>
);

export default SearchBox;


