import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import './index.css';
import {Battle, Battleground, CreateBattle, JoinBattle} from "./page/index.js";
import { GlobalContextProvider } from './context/index.jsx';
import {OnboardModal} from "./components/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalContextProvider>
        <OnboardModal />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-battle" element={<CreateBattle />} />
            <Route path="/join-battle" element={<JoinBattle />} />
            <Route path="/battleground" element={<Battleground />} />
            <Route path="/battle/:battleName" element={<Battle />} />
        </Routes>
    </GlobalContextProvider>
  </BrowserRouter>
);
