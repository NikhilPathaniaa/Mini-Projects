import React from 'react'
import React, { useState, useEffect } from 'react';

export default function Test() {
  return (

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL of the API you want to fetch
    const apiUrl = 'https://api.example.com/data';

    // Use the fetch function to make the API request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] means this effect runs once when the component mounts.

  return (
    <div>
      {data ? (
        // Render the data
        <p>{data.someProperty}</p>
      ) : (
        // Render loading or error message
        <p>Loading...</p>
      )}
    </div>
  );
}
)
}
