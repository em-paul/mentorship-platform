import './mentee-homepage-tabs.css';
import { MenteeHomepage } from './MenteeHomepage';
import './App.css';
import { IoPersonCircleSharp } from 'react-icons/io5';
import Logo from './PA_logo_color_dark.png';

const TopBar = () => {
  return (
    <div className = 'top-bar'>
      <img  src = {Logo} alt = "Project Access logo"
      style = {{height: '7vh', position: 'absolute', top: '0', left: '0', marginLeft: '3vh'}} />
      <a href = "https://projectaccess.org/home-page2021a" 
      style = {{margin: '1em', color: 'black'}}> Project Access Website </a>
      <a> | </a>
      <a href = "https://projectaccess.org/home-page2021a" 
      style = {{margin: '1em', color: 'black'}}> Help </a>
      <a> | </a>
      <a href = "https://projectaccess.org/home-page2021a" 
      style = {{margin: '1em', color: 'black'}}> Profile Settings </a>
      <IoPersonCircleSharp size = '4em' />
    </div>
  )
}

function App() {
  return (
    <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}} >
      <TopBar />
      <MenteeHomepage />
    </div>
    
  )
}

export default App;
