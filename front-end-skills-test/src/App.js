import mpLogo from './images/mp_logo-removebg-preview.png'
import social from './images/socialMedia.png';
import search from './images/searchCircle.png';
import searchGlass from './images/carbon_search.png';
import connect from './images/connectW.png';
import './App.css';

function App() {
  return (
    <div className='App'> 

    <nav>
      
      <ul>
        <li className='service'> Service</li>
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
    <img src={mpLogo} alt='mp logo'/>
    </div>
  )
}

export default App;
