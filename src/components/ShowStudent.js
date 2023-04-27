import { useSelector } from 'react-redux';
const ShowStudent = (props) => {
  const student = props.student;
  return(
    <>
      <table className='table table-striped'>
      <thead>
        <tr>
          <th>ID</th>
          <td>{student.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{student.name}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{student.phone}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{student.city}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{student.address}</td>
        </tr>
        </thead>
      </table>
    </>
  );
};
export default ShowStudent;