import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.aladhan.com/v1/calendarByCity/2024/3?city=London&country=United%20Kingdom&method=2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log('tw')
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <div className="App">
      {console.log(data["data"][0])}
    </div>
  );
}

export default App;
