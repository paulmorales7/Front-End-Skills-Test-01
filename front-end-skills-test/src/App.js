import mpLogo from './images/mp_logo-removebg-preview.png'
import social from './images/socialMedia.png';
import './App.css';

function App() {
  return (
    <div className='App'> 

    <nav>
      <ul>
        <li><a href='#'><img className='social' src={social} alt='social media'/></a></li>
        <li> Connect Wallet</li>
        <li> Service</li>
        <li> Events</li>
        <li> Learn</li>
        <li> Join</li>
        <li> Search</li>
      </ul>
    </nav>
    <img src={mpLogo} alt='mp logo'/>
    </div>
  )
}

export default App;
