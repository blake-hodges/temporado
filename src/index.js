import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Properties from './pages/Properties';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
   
)




