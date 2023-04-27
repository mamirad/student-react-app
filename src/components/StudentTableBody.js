import { useSelector, useDispatch } from 'react-redux'
import {addStudent, ListStudents, fetchStudents, showStudent, editStudent} from '../state/actions/index'
import ReactDOM from 'react-dom'
import Students from './ListStudents'
const StudentTableBody = (props) => {
  const dispatch = useDispatch();
  async function fetchStudentList() {
    const response = await fetch('http://localhost:8080/students.json');
    const data = await response.json();
    dispatch(fetchStudents(data));
  }
  async function fetchStudentById(id, action, method='GET') {
    const response = await fetch("http://localhost:8080/students/"+id+".json",{method: method});
    const data = await response.json();
    if(action === 'show'){
      dispatch(showStudent(data));
    }
    else if(action === 'edit'){
      dispatch(editStudent(data));
    }
    else{
      fetchStudentList();
    }
    
  }
  const showStudentHandler = (event) => {
    fetchStudentById(event.target.dataset.id, 'show');
  }

  const editStudentHandler = (event) => {
    fetchStudentById(event.target.dataset.id, 'edit');
  }
  const deleteStudentHandler = (event) => {
    fetchStudentById(event.target.dataset.id,'del', 'DELETE');
  }
  return(
    <tr>
      <th scope="row">{props.student.id}</th>
        <td>{props.student.name}</td>
        <td>{props.student.email}</td>
        <td>{props.student.phone}</td>
        <td>{props.student.city}</td>
        <td>{props.student.address}</td>
        <td>
        <button onClick={showStudentHandler} data-id={props.student.id} className='btn btn-sm btn-info'>Show</button> |
        <button onClick={editStudentHandler} data-id={props.student.id} className='btn btn-sm btn-warning'>Edit</button> |
        <button onClick={deleteStudentHandler} data-id={props.student.id} className='btn btn-sm btn-danger'>Delete</button>
        </td>
      </tr>
    );
};
export default StudentTableBody;