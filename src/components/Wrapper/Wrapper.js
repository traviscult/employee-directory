import API from "../../utils/API.js";
import Header from "../Header/Header";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import SearchBar from "../SearchBar/SearchBar";
import { Component } from "react";

class Wrapper extends Component {
  // Setting the component's initial state
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

  handleSearch = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Enter a name");
    }
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({
      filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          employee={this.state.employees}
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable
          results={this.state.filteredEmployees}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default Wrapper;
