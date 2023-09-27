import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  // Define state variables to store user input
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {fullName, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))

    // You can perform registration logic here
    // For this example, we'll just log the user input
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // Inline CSS styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url("https://c8.alamy.com/comp/DNM48K/cartoon-illustration-of-huge-set-of-laughing-people-faces-DNM48K.jpg")', // Replace 'your-image-url.jpg' with the URL of your background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundRepeat: 'no-repeat', // Adjust as needed
    },
   
    form: {
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f7f7f7',
      boxShadow: '0px 0px 5px 0px #ccc',
    },
    input: {
      width: '100%',
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
       

        <p>Already Have an Account ?</p>

        <Link to="/login" type="submit" style={styles.button}>
          Login
        </Link>
        </form>
    </div>
  );
}

export default RegisterPage;
