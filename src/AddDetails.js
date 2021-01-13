import axios from 'axios';
import React, { useState }from 'react'
import { Link } from 'react-router-dom';

function AddDetails() {

  // Store the state of Variables

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')

  // Store the errors of Variables

  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName, setErrorLastName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('')
  const [errorAddress1, setErrorAddress1] = useState('')
  const [errorAddress2, setErrorAddress2] = useState('')
  const [errorCity, setErrorCity] = useState('')
  const [errorZipCode, setErrorZipCode] = useState('')
  const [errorState, setErrorState] = useState('')

  // Store success Message
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();

    
    // Validate User's input
    if (firstName.length > 255 ) {
      setErrorFirstName('First Name should not be greater than 255')
    }
    if (lastName.length > 255) {
      setErrorLastName('Last Name should not be greater than 255')
    }
    if (email.length > 255) {
      setErrorEmail('Email should not be greater than 255')
    }
    if (number.length > 11) {
      setErrorPhoneNumber('Phone Number should not be greater than 11')
    }
    if (address1.length > 255) {
      setErrorAddress1('Address not be greater than 255')
    }
    if (address2.length > 255) {
      setErrorAddress2('Address not be greater than 255')
    }
    if (city.length > 255) {
      setErrorCity('City not be greater than 255')
    }
    if (zipCode.length > 15) {
      setErrorZipCode('Zip Code not be greater than 15')
    }
    if (state.length > 255) {
      setErrorState('State not be greater than 255')
    }


    if (errorFirstName === "" && errorLastName === "" && errorEmail === "" && errorPhoneNumber === "" && errorAddress1 === "" && errorAddress2 === "" && errorCity === "" && errorZipCode === "" && errorState === "") {

      console.log('Connect to API');

      axios.post('http://127.0.0.1:8000/users/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: number,
        address_line_1: address1,
        address_line_2: address2,
        city: city,
        zip_code: zipCode,
        state: state

      }).then((response) => {
        setSuccess('Data Submitted Successfully')
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })

    }


  }

  
  return (
    <div>

      <h1>Fill User Details</h1>

      <big>{success}</big>
   
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="form-control" />
        <small>{errorFirstName}</small>
        <br />
        <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="form-control" />
        <small>{errorLastName}</small>
        <br />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" />
        <small>{errorEmail}</small>
        <br />
        <input type="text" placeholder="phone number" value={number} onChange={(e) => setNumber(e.target.value)} required className="form-control" />
        <small>{errorPhoneNumber}</small>
        <br />
        <input type="text" placeholder="address 1" value={address1} onChange={(e) => setAddress1(e.target.value)} required className="form-control" />
        <small>{errorAddress1}</small>
        <br />
        <input type="text" placeholder="address 2 (optional)" value={address2} onChange={(e) => setAddress2(e.target.value)} className="form-control" />
        <small>{errorAddress2}</small>
        <br />
        <input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} required className="form-control" />
        <small>{errorCity}</small>
        <br />
        <input type="number" placeholder="zip code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required className="form-control" />
        <small>{errorZipCode}</small>
        <br />
        <input type="text" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} required className="form-control" />
        <small>{errorState}</small>
        <br />
        <input type="submit" value="Add Details" className="btn btn-primary" />
      </form>

      <Link to="/" className="dark-color">Go Back</Link>

    </div>
  )
}

export default AddDetails
