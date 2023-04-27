const ViewStudents = (state = null, action) => {
  if(action.type === 'fetch_students'){
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
export default ViewStudents;
