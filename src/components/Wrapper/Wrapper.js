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
  // this is what will be displayed when page is loaded
  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  sortByName = () => {
    const filtereds = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorteds = filtereds.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sorteds);

      this.setState({
        filteredEmployees: sorteds,
        order: "desc",
      });
    } else {
      const sorteds = filtereds.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sorteds);

      this.setState({
        filteredEmployees: sorteds,
        order: "asc",
      });
    }
  };

  handleInputChange = (event) => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      filteredEmployees,
    });
  };

  // API call to randomuser.me
  employeeSearch = () => {
    API.getUsers()
      .then((res) => {
        console.log("employee data", res);
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
}

export default Wrapper;
