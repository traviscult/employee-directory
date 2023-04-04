// import API from "../../Utils/API";
// import Header from "../Header/Header";
// import EmployeeTable from "../EmployeeTable/EmployeeTable";
// import SearchBar from "../SearchBar/SearchBar";
import { Component } from "react";

class Wrapper extends Component {
  // Setting the components inital state
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: "",
  };
}

export default Wrapper;
