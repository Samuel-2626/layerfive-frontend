import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

function Users() {


  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/users/').then(res => {
    setUsers(res.data);
    setIsPending(false)
    }).catch(err => {
      console.log(err);
    })

  }, []);


  return (
    <div>
      <h1>User's Details</h1>

      { isPending && <div>Loading...</div> }
      <table class="table table-dark table-striped">
      <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>City</th>
              <th>Zip Code</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
        {users && users.map((user) => (
          
          
          
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.address_line_1}</td>
              <td>{user.address_line_2}</td>
              <td>{user.city}</td>
              <td>{user.zip_code}</td>
              <td>{user.state}</td>
            </tr>
            
          
  
      ))}
          </tbody>
        </table>
      <Link to="/add" className="dark-color">New Detail</Link>

    </div>
  )
}

export default Users
