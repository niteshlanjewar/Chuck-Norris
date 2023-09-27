import React, { useState } from 'react';

const App = () => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Update the joke state with the fetched joke
      setJoke(data.value);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem fetching the joke:', error);
    });
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nitesh</title>
        <style>
          {`
            /* Add your CSS styles here */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-image: url(https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/05/world-laughter-day.jpg); 
              background-size: cover; /* Adjust as needed */
              background-repeat: no-repeat; /* Adjust as needed */
              background-color: grey; /* Fallback background color */
            }
            .container {
              width: 90%;
              max-width: 500px;
              margin: 70px auto 0; /* Added margin-top: 50px */
              background-color: rgb(51, 55, 59);
              border-radius: 8px;
              padding: 3rem;
              display: flex;
              flex-direction: column;
            }
            .joke {
              font-size: 1.2rem;
              margin-bottom: 1rem;
              color: white;
            }
            button {
              background-color: #007bff;
              color: #ffffff;
              border: none;
              padding: 0.5rem 1rem;
              font-size: 1rem;
              cursor: pointer;
              border-radius: 4px;
            }
            button:hover {
              background-color: #0056b3;
            }
          `}
        </style>
      </head>
      <body>
        <div id="root"></div>
        <section>
          <div className="container">
            <div className="joke">
              <p>{joke || 'Click the button to get a joke'}</p>
            </div>
            <button onClick={getJoke}>Get A DAD Joke</button>
          </div>
        </section>
      </body>
    </html>
  );
};

export default App;
