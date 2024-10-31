import './App.css';
import logoImg from './assets/discord-logo-white.png';
import menuImg from './assets/menu-icon.png';
import discordImg from './assets/discord-background.png';
import DownloadBtn from './components/DownloadBtn.jsx';
import OpenBtn from './components/OpenBtn';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
      <img src = {logoImg} className="logo" alt="discord-logo" />
      <img src={menuImg} className="menu" alt="menu image" />
      </div>
      <div className='main-wrapper'>
        <h1 className="header">IMAGINE A <br/>PLACE...</h1>
        <p className="text">
          ...where you can belong to a school club, a gaming group, or a <br/>worldwide art community. Where just you and a handful of <br/>friends can spend time together. A place that makes it easy to <br/>talk ever day and hang out more often.
        </p>
        <div className='wrapper'>
          <div className='btn-wrapper'>
          <DownloadBtn/>
          <OpenBtn/>
          </div>
          <img src = {discordImg} className="discord-img" alt="discord-image" />
        </div>
      </div>
    </div>
    
  );
}

export default App;