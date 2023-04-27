import StudentForm from './StudentForm';
import ListStudent from './ListStudents'
import { useSelector, useDispatch } from 'react-redux'

const AddStudent = () => {
  	const student = useSelector(state => state.EditStudent);
  	const state = useSelector(state => state.StudentReducer);
	return(
		<StudentForm student={student} editable={state.EditStudent}/>
		);
};
export default AddStudent;