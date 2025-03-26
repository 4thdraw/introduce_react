import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/navigation"; // Swiper 네비게이션 스타일
import "swiper/css/pagination"; // Swiper 페이지네이션 스타일

import "./scss/global.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


