// basic react component with export default

import React from 'react';
import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import Header from './Header';
import DataTable from './Table';


const Dashboard = () => {
    // Fetch data from the Node dummy API here
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

    const addAuthorizationRequest = () => {
        window.location.href = '/form';
    }

    return (
        <div className="App">
      <Header />

      <div className="App-nav-sections">
      <section className="add-section">
        <button className="auth-request-button" onClick={addAuthorizationRequest}>Add Authorization Request</button>
      </section>
      
      <section className="referrals-section">
        <button className="referrals-button">View Referrals</button>
      </section>
      </div>

      <section className="dashboard-section">

        <DataTable data={data} />
        {/* Display the fetched data here */}
        {/* {data.map(item => (
          <div key={item.id}>
            <p>Auth Request No: {item.authRequestNo}</p>
            <p>Status: {item.status}</p>
            <p>Patient: {item.patient}</p>
            <p>Service: {item.service}</p>
            <p>Auth Type: {item.authType}</p>
            <p>Created Date: {item.createdDate}</p>
          </div>
        ))} */}
      </section>

    </div>
    );
}

export default Dashboard;