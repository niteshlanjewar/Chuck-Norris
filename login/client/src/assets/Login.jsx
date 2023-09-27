import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // Define state variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "jmla re"){
            navigate('/home');
        }
    })
    .catch(err => console.log(err))

    // You can perform login logic here
    // For this example, we'll just log the user input
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
      backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/03/98/14/28/1000_F_398142801_9ysK9z12ulpRAIspo6Rc7MGEci2Cvwzv.jpg")', // Replace 'your-image-url.jpg' with the URL of your background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundRepeat: 'no-repeat', // Adjust as needed
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    input: {
      width: '100%',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '3px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Login Page</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
