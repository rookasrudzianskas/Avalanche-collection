import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import './index.css';
import {CreateBattle} from "./page/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-battle" element={<CreateBattle />} />
    </Routes>
  </BrowserRouter>,
);
