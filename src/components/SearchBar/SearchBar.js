import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input
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
