import React from 'react';
import { Route, Link } from 'react-router-dom';
import social from '../../images/socialMedia.png';
import search from '../../images/searchCircle.png';
import searchGlass from '../../images/carbon_search.png';
import connect from '../../images/connectW.png';

import './nav.css';

function nav() {
    return(
<nav>
      
      <ul>
      <a href="/startups"><li className='service'>Start ups</li></a>
        <li className='events'> Events</li>
        <li className='learn'> Learn</li>
        <li className='join'> Join</li>
      </ul>
      <div>
         <img className='wallet' src={connect} alt='connect wallet'/>
         </div>
      <a href='#'><img className='searchCircle' src={search} alt='search'/></a>
      <a href='#'><img className='search' src={searchGlass} alt='search'/></a>
      <a href='#'><img className='social' src={social} alt='social media'/></a>
    </nav>
    )
}

export default nav;