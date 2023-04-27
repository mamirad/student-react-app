const addStudent = (data) => {
	return{
		type: 'add_student',
		payload: data
	};
};

const listStudents = () => {
	return{
		type: 'list_students'
	};
};


const showStudent = (data) => {
	return{
		type: 'show_student',
		payload: data
	};
};

const editStudent = (data) => {
	return{
		type: 'edit_student',
		payload: data
	};
};

const deleteStudent = () => {
	return{
		type: 'delete_student'
	};
};

const fetchStudents = (data) => {
	return{
		type: 'fetch_students',
		payload: data
	};
};

export { addStudent, listStudents, editStudent, deleteStudent, fetchStudents, showStudent }
