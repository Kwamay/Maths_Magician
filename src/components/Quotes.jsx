import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      .then((response) => response.json())
      .then((data) => {
        // Set the quote and mark loading as false when fetch is finished
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((error) => {
        <p>{error}</p>;
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Quote of the Day</h2>
          <p>{quote}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
