const AddStudent = (state = null, action) => {
if(action.type === 'add_student'){
    return(
    state = action.payload
    );

  }
  else{
    return(
    state
    );
  }

}
export default AddStudent;
