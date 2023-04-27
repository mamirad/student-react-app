const ShowStudent = (state = null, action) => {
 
  if(action.type === 'show_student'){
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
export default ShowStudent;
