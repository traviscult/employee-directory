import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Employee Directory</h1>
      <p>
        Click on name field to filter alphabetically or use the search box to
        narrow your results.
      </p>
    </div>
  );
};

export default Header;
