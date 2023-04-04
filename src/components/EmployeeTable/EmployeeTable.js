import "./EmployeeTable.css";
import Table from "react-bootstrap/Table";

const EmployeeTable = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Employee Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>DOB</th>
        </tr>
      </thead>
    </Table>
  );
};

export default EmployeeTable;
