import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import FormComponent from './components/Form';

function App() {

  return (
    // add routes for dashboard and form components here using react router
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<FormComponent />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;