import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import ShowStudent from './ShowStudent';
import EditStudent from './EditStudent'

const rootReducers = combineReducers({
	StudentReducer: StudentReducer,
	AddStudent: AddStudent,
	ViewStudents: ViewStudents,
	ShowStudent: ShowStudent,
	EditStudent: EditStudent
});

export default rootReducers;