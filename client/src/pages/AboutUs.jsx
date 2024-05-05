import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axios from './../config/axiosConfig';
const AboutUs = () => {

    const [trialData, setTrialData] = useState([]);

    useEffect(() => {
        const fetchTrialData = async () => {
          try {
            const response = await axios.get('/trialdata');
            if (Array.isArray(response.data)) { // Check if response.data is an array
              setTrialData(response.data);
            } else {
              console.error('Data fetched is not an array:', response.data);
            }
          } catch (error) {
            console.error('Error fetching trial data:', error);
          }
        };
    
        fetchTrialData();
      }, []);
    

  return (
    <div>
      <h1>Trial Data</h1>
      <ul>
        {trialData.map((dataItem, index) => (
          <li key={index}>
            <p>Name: {dataItem.name}</p>
            <p>Address: {dataItem.address}</p>
            <p>Marks: {dataItem.marks.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs