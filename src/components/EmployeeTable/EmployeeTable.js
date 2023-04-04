import "./EmployeeTable.css";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";

const EmployeeTable = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Employee Image</th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr className="table-dark" key={result.login.uuid}>
            <td>
              {" "}
              <img src={result.picture.medium} alt="" />
            </td>

            <td>{result.name.first + " " + result.name.last} </td>

            <td>{result.cell}</td>
            <td className="email">
              <a href={result.email}>{result.email}</a>
            </td>
            <td>
              <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
