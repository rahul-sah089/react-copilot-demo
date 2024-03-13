import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import FormMainStepper from './components/FormMainStepper';

function App() {

  return (
    // add routes for dashboard and form components here using react router
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<FormMainStepper />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;