import React,{useRef, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addStudent, listStudents, fetchStudents, showStudent} from '../state/actions/index'
import InputField from './InputField'
import css from './main.css'
import ValidationText from './ValidationText'



const StudentForm = (props) => {
  const dispatch = useDispatch();
  const student = props.student;
  console.log(`form editable ${props.editable}`);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [validName, setValidName] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const [validPhone, setValidPhone] = useState(null);
  const [validCity, setValidCity] = useState(null);
  const [validAddress, setValidAddress] = useState(null);


  useEffect(() => {
      (validName && validEmail && validPhone && validCity && validAddress) ? setValidForm(true) : setValidForm(false)
    return () => {
    }
  },[validName, validEmail, validPhone, validCity, validAddress, student]);

  useEffect(() => {
    if(student != null ){
    setName(student.name);
    setCity(student.city);
    setAddress(student.address);
    setPhone(student.phone);
    setEmail(student.email);
    }
    if(props.editable){
      setValidForm(true);
      setValidName(true);
      setValidEmail(true);
      setValidPhone(true);
      setValidCity(true);
      setValidAddress(true);
    }
  }, [student]);

  const inputNameHandler = (event) => {
    name.length > 3 ? setValidName(true) : setValidName(false)
    setName(event.target.value);
  }
  const inputEmailHandler = (event) => {
    email.length > 7 && email.includes('@') ? setValidEmail(true) : setValidEmail(false)
    setEmail(event.target.value);
  }
  const inputPhoneHandler = (event) => {
    phone.length > 7 ? setValidPhone(true) : setValidPhone(false)
    setPhone(event.target.value);
  }
  const inputCityHandler = (event) => {
    city.length > 3 ? setValidCity(true) : setValidCity(false)
    setCity(event.target.value);
  }
  const inputAddressHandler = (event) => {
    address.length > 5 ? setValidAddress(true) : setValidAddress(false)
    setAddress(event.target.value);
  }
  
  async function saveStudent() {
    try {
      const response = await fetch('http://localhost:8080/students.json',{
        method: 'POST',
        body: JSON.stringify({
          student: {
            name: name, 
            email: email, 
            city: city, 
            address: address, 
            phone: phone
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      dispatch(showStudent(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function updateStudent() {
    try {
      const response = await fetch("http://localhost:8080/students/"+student.id+".json",{
        method: 'PUT',
        body: JSON.stringify({
          student: {
            name: name, 
            email: email, 
            city: city, 
            address: address, 
            phone: phone
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      dispatch(showStudent(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if(props.editable){
      console.log('update is calling');
      updateStudent();
    }
    else{
    saveStudent();

    }
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setAddress('');
  };
  const isValid = (state) => {
    return (state == null || state);
  }
  return(
    <form onSubmit={formSubmitHandler}>
      <ValidationText status={validName} msg={'Enter valid name'}/>
      <div className="form-floating mb-3">
        <InputField type='text' value={name} method={inputNameHandler} classes={`form-control ${isValid(validName) ? 'is-valid' : 'is-invalid'}`} ids='floatingInput' placeHolder='Jon'/>
        <label>Your Name</label>
      </div>


      <ValidationText status={validEmail} msg={'Enter valid Email'}/>
      <div className="form-floating mb-3">
        <InputField type='email' value={email} method={inputEmailHandler} classes={`form-control ${isValid(validEmail) ? 'is-valid' : 'is-invalid'}`} ids='floatingInput' placeHolder='name@example.com'/>
        <label>Email address</label>
      </div>

      <ValidationText status={validPhone} msg={'Enter valid phone'}/>
      <div className="form-floating mb-3">
        <InputField type='text' value={phone} method={inputPhoneHandler} classes={`form-control ${isValid(validPhone) ? 'is-valid' : 'is-invalid'}`} ids='floatingInput' placeHolder='+92 300 1234567'/>
        <label>Your Phone</label>
      </div>

      <ValidationText status={validCity} msg={'Enter valid city'}/>
      <div className="form-floating mb-3">
        <InputField type='text' value={city} method={inputCityHandler} classes={`form-control ${isValid(validCity) ? 'is-valid' : 'is-invalid'}`} ids='floatingInput' placeHolder='Lahore'/>
        <label>Your city</label>
      </div>

      <ValidationText status={validAddress} msg={'Enter valid address'}/>
      <div className="form-floating mb-3">
        <InputField type='text' value={address} method={inputAddressHandler} classes={`form-control ${isValid(validAddress) ? 'is-valid' : 'is-invalid'}`} ids='floatingInput' placeHolder='Stree, House'/>
        <label>Your Address</label>
      </div>
      <button type="submit" disabled={!validForm} className="btn btn-primary" >Submit</button>
    </form>
    );
};
export default StudentForm;