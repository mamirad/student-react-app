const EditStudent = (state = null, action) => {
  console.log('reducer');
  console.log(action);
if(action.type === 'edit_student'){
  console.log(action);
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
export default EditStudent;
