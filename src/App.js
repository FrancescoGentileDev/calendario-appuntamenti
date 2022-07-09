import React from 'react';
import Sidebar from './components/sidebar'
import"./app.css"
import Dashboard from './routes/Dashboard';
import Setting from './routes/Setting'
import Client from './routes/Client'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function app() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />}/>
      <Route path= "/" element= {<Navigate to="dashboard/calendario" />}/>
      
    </Routes>
  </BrowserRouter>
  );
}





export default app;
