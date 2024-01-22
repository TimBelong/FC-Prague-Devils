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

		<div className="header_links">
			<nav className="nav-links">
				<a href="/">Home</a>
				<a href="/about">Feautures</a>
				<a href="/services">News</a>
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
      </div>

	  <div className="header_bottom">
		<nav className="bottom-links">
			<a href="#">Table of Matches</a>
			<a href="#">Updates</a>
			<a href="#">Calendars</a>
			<a href="#">Top Scores</a>
			<a href="#">League Table</a>
			<a href="#">Team Table</a>
			<a href="#">Events</a>
			<a href="#">Sponsors</a>
		</nav>
	  </div>
    </header>
  );
};

export default AppHeader;
