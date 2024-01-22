import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './AppHeader.css'; // Создайте файл AppHeader.css для стилей компонента

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="wrapper">
      <div className="logo">
        <img src={require('../../images/logo.png')} alt="Logo" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={30}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a>
      </div>
      </div>
    </header>
  );
};

export default AppHeader;
