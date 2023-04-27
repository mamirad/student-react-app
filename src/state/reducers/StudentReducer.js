const initState = { ListStudentState: false, AddStudentState: true, ShowStudent: false, EditStudent: false };
const StudentReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'add_student'){
    return(
    state = { ListStudentState: false, AddStudentState: true, ShowStudent: false }
    );
  }
  else if(action.type === 'fetch_students'){
    return(
    state = { ListStudentState: true, AddStudentState: false, ShowStudent: false }
    );
  }
  else if(action.type === 'show_student'){
    return(
    state = { ListStudentState: false, AddStudentState: false, ShowStudent: true }
    );
  }
  else if(action.type === 'edit_student'){
    return(
    state = { ListStudentState: false, AddStudentState: true, ShowStudent: false, EditStudent: true }
    );
  }
  else {
    return(
    state
    );
  }
}
export default StudentReducer;
