import './Tabs.css';
import { MenteeHomepage } from './MenteeHomepage';
import './App.css';
import { IoPersonCircleSharp, IoAppsOutline, IoChatbubblesOutline } from 'react-icons/io5';
import Logo from './PA_logo_color_dark.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HiOutlineHome } from 'react-icons/hi';
import { FiFlag } from 'react-icons/fi';
import { BsFileText } from 'react-icons/bs';
// import ProgressBar from './ProgressBar';

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
      <Tabs className = 'react-vertical-tabs'>
        <TabList className = 'react-tabs__vertical-tab-list'>
          <Tab className = 'react-tabs__vertical-tab' selectedClassName = 'react-tabs__vertical-tab--selected'> 
            <HiOutlineHome size = '2em'/>
          </Tab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Home </p>
          <Tab className = 'react-tabs__vertical-tab' selectedClassName = 'react-tabs__vertical-tab--selected'> 
            <IoAppsOutline size = '2em' /> 
          </Tab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Programs </p>
          <Tab className = 'react-tabs__vertical-tab' selectedClassName = 'react-tabs__vertical-tab--selected'> 
            <FiFlag size = '2em' /> 
          </Tab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Modules </p>
          <Tab className = 'react-tabs__vertical-tab' selectedClassName = 'react-tabs__vertical-tab--selected'> 
            <BsFileText size = '2em' /> 
          </Tab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Applications </p>
          <Tab className = 'react-tabs__vertical-tab' selectedClassName = 'react-tabs__vertical-tab--selected'> 
            <IoChatbubblesOutline size = '2em' /> 
          </Tab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Messages </p>
        </TabList>
        <TabPanel>
          <MenteeHomepage />
        </TabPanel>
        <TabPanel>
          <div className = 'main-body' >
            <div style = {{height: '87vh', width: '85vw', padding: '2em', 
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} >
              <h1> Project Access Programs </h1>
              <p> Learn more about all the programs Project Access offers to students! </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className = 'main-body' >
            <div style = {{height: '87vh', width: '85vw', padding: '2em', 
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} >
              <h1> Access Academy Learning Modules </h1>
              {/* <ProgressBar program = 'Completion' progress = {72} color = 'rgba(25, 175, 149, 1)' /> */}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className = 'main-body' >
            <div style = {{height: '87vh', width: '85vw', padding: '2em', 
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} >
              <h1> My Applications </h1>
              <p> Let's keep track of your applications! </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className = 'main-body' >
            <div style = {{height: '87vh', width: '85vw', padding: '2em', 
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} >
              <h1> Messages </h1>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
    
  )
}

export default App;
