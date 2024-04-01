import React, { useState } from 'react';


function App() {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: null,
    rememberMe: false
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setData(prev => ({
      ...prev,
      [name]: fieldValue
    }));
  };

  const submitHandler = (e) => {
    const formData = JSON.stringify(Data); 
    alert(`${formData}`); 
  };
  return (
    <div  style={{padding:"10px",backgroundColor:"grey"}}>
      <center style={{backgroundColor:"yellow"}}> <h2>Registration Form</h2> </center>
      <form onSubmit={submitHandler} style={{justifyContent:'center'}} >
        <div>
          <label >First Name:</label>
          <input
            style={inputStyle}
            type="text"
            placeholder='firstName' 
            required
            name="First Name"
            value={Data.firstName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label >Last Name:</label>
          <input
            style={inputStyle}
            type="text"
            placeholder='Last Name'
            name="lastName"
            value={Data.lastName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            style={inputStyle}
            type="email"
            placeholder='email'
            name="email"
            required
            value={Data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label >Password:</label>
          <input
            style={inputStyle}
            type="password"
            placeholder='Password'
            name="password"
            required
            value={Data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label >Date of Birth:</label>
          <input
            style={inputStyle}
            type="date"
            name="dateOfBirth"
            value={Data.dateOfBirth}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            style={inputStyle}
            type="checkbox"
            name="rememberMe"
            checked={Data.rememberMe}
            onChange={changeHandler}
          />
          <label>Remember me</label>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}
const buttonStyle = {
  backgroundColor: "green",
  color: "white",
  borderColor: "black",
  height: "30px",
  width: "100px",
  margin: "10px"
}
const inputStyle = {
  margin: "20px" ,
   height:"20px"
}

export default App;
