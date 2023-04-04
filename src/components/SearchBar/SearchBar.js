import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          id="employee"
          type="text"
          className="inputBox"
          placeholder="Search by name"
        />
      </form>
    </div>
  );
};

export default SearchBar;
