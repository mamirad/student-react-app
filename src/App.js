import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import ListStudent from './components/ListStudents';
import { useSelector } from 'react-redux';
import ShowStudent from './components/ShowStudent'
import AlertBox from './components/AlertBox'
import { useState, useEffect } from 'react'


function App() {
  const [students, setStudents] = useState([]);
  const state = useSelector(state => state.StudentReducer)
  const studentsList = useSelector(state => state.ViewStudents);
  const student = useSelector(state => state.ShowStudent);

  useEffect(()=>{
    setStudents(studentsList);
  },[studentsList])

  return (
    <>
      <NavBar/>
      {state.ShowStudent && <ShowStudent student={student} />}
      {(state.AddStudentState || state.EditStudent) && <AddStudent />}
      {state.ListStudentState &&  <ListStudent students={students}/> }
    </>
  );
}

export default App;
