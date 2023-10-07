import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'GvOQshMcCXvn/q1dlbv2lA==YGpct0k5i11OyNEg';

    // Define headers with the API key
    const headers = new Headers({
      'X-API-KEY': apiKey,
      // You can add more headers here if needed
    });

    // Construct the URL
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

    // Fetch the quote from the API with headers
    fetch(apiUrl, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // Set the quote and mark loading as false when fetch is finished
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Set the error message
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  } else {
    content = (
      <div>
        <h2>Quote of the Day!</h2>
        <p>{quote}</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Quotes;
