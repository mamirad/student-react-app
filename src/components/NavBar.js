import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addStudent, listStudents, fetchStudents} from '../state/actions/index'


const NavBar = () => {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  const AddStudentEventHandler = () => {
    dispatch(addStudent(null));
  };

  async function fetchStudentList() {
    const response = await fetch('http://localhost:8080/students.json');
    const data = await response.json();
    dispatch(fetchStudents(data));
  }


  const ListStudentEventHandler = () => {
    fetchStudentList()
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My School</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={AddStudentEventHandler}>Add Student</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ListStudentEventHandler}>List Student(s)</button>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
