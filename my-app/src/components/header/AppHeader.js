import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './AppHeader.css';

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
				<a href="/about">News</a>
				<a href="/services">Trainings</a>
				<a href="/contact">Season</a>
				<a href="/contact">Team</a>
				<a href="/contact">Shop</a>
			</nav>

			<div className="social-links">
				<a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30}/></a>
				<a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={30}/></a>
				<a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a>
			</div>
		</div>
      </div>

	  {/* <div className="header_bottom">
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
	  </div> */}
    </header>
  );
};

export default AppHeader;
