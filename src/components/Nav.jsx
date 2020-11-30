import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from './../media/icons/home';
import CalculatorIcon from './../media/icons/calculator';
import ExchangeIcon from './../media/icons/exchange';

function Nav({ page }) {
  return (
    <nav className='nav-bar'>
      <div style={{ height: '30px' }} />
      <Link to='/' className={`nav-item ${page === '/' && 'selected'}`}>
        <HomeIcon className='nav-icon' />
        <span>Home</span>
      </Link>
      <Link to='/calculator' className={`nav-item ${page === '/calculator' && 'selected'}`}>
        <CalculatorIcon className='nav-icon' />
        <span>Calculator</span>
      </Link>
      <Link to='/currency-converter' className={`nav-item ${page === '/currency-converter' && 'selected'}`}>
        <ExchangeIcon className='nav-icon' />
        <span>Currency Converter</span>
      </Link>
    </nav>
  );
}

export default Nav;
