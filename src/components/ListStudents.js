import { useSelector } from 'react-redux';
import StudentTableBody from './StudentTableBody'
import AlertBox from './AlertBox'
const ListStudents = (props) => {

    const studentRow = (student) => {
    return(
      <StudentTableBody key={student.id} student={student} />
      );
    
  }
  return(
    <>
      {!props.students && <AlertBox msg='Record not found'/>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope='col'>Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {props.students && props.students.map(student => studentRow(student))}


          
        </tbody>
      </table>
    </>
    );
};
export default ListStudents;