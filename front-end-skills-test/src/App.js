import mpLogo from './images/mp_logo-removebg-preview.png'
import mpLogoShape from './images/logoShape.png'
import social from './images/socialMedia.png';
import search from './images/searchCircle.png';
import searchGlass from './images/carbon_search.png';
import connect from './images/connectW.png';
import butterfly from './images/butterfly.png';
import world from './images/world.png';
import filler from './images/filler.png';
import smallFiller from './images/smallFiller.png';
import group from './images/Group.png';
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
   

    <div className='mainDiv'>

    <div className='rectangle'>
    <img className='butterfly' src={butterfly} alt='butterfly' />
    <img className='filler' src={filler} alt='filler' />
    <img className='smallFiller' src={smallFiller} alt='small-filler' />
    <img className='world' src={world} alt='world' />
    <p className='rectP'>Learn high in <br/> Demand IT skills & get crypto</p>
    <p className='smallText'>powered by KoinStreet</p>
    <img className='group' src={group} alt='group' />
    </div>
    <img className='logo' src={mpLogo} alt='mp logo'/>
    <img className='logoShape' src={mpLogoShape} alt='mp logo shape'/>


    </div>


    </div>


  )
}

export default App;
