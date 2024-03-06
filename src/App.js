import './App.css';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


function App() {
  // Fetch data from the Node dummy API here
  const [data, setData] = useState([]);

  useEffect(() => {
    debugger;
    fetch('http://localhost:3002/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header/>
      <section className="referrals-section">
        <button className="referrals-button">View Referrals</button>
      </section>
      <section className="dashboard-section">
        {/* Display the fetched data here */}
        {data.map(item => (
          <div key={item.id}>
            <p>Auth Request No: {item.authRequestNo}</p>
            <p>Status: {item.status}</p>
            <p>Patient: {item.patient}</p>
            <p>Service: {item.service}</p>
            <p>Auth Type: {item.authType}</p>
            <p>Created Date: {item.createdDate}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;