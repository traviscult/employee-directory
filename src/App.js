import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
