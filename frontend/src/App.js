import './mentee-homepage-tabs.css';
import { MenteeHomepage } from './MenteeHomepage';
import './App.css';
import { IoPersonCircleSharp, IoAppsOutline, IoChatbubblesOutline } from 'react-icons/io5';
import Logo from './PA_logo_color_dark.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
// import styles from './vertical-tabs.css';
import { HiOutlineHome } from 'react-icons/hi';
import { FiFlag } from 'react-icons/fi';
import { BsFileText } from 'react-icons/bs';
import ProgressBar from './ProgressBar';

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

const VerticalTabs = styled(Tabs)`
  display: flex;
`;

const VerticalTabList = styled(TabList)`
  activeTabClassName: 'react-tabs__vertical-tab--selected';
  display: flex;
  margin-right: 3vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VerticalTab = styled(Tab)`
  background: rgba(217, 241, 237, 1);
  color: rgba(25, 175, 149, 1);
  font-size: 1em;
  font-weight: bold;
  border-radius: 50px;
  display: inline-block;
  margin-top: 1em;
  box-shadow: rgba(95, 95, 95, 0.432) 2.5px 2.5px;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 10px 20px;
  cursor: pointer;
`;

function App() {
  return (
    <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}} >
      <TopBar />
      <VerticalTabs>
        <VerticalTabList activeTabClassName = 'react-tabs__vertical-tab--selected' >
          <VerticalTab> 
            <HiOutlineHome size = '2em'/>
            {/* <h6 style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Home </h6> */}
          </VerticalTab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Home </p>
          <VerticalTab> <IoAppsOutline size = '2em' /> </VerticalTab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Programs </p>
          <VerticalTab> <FiFlag size = '2em' /> </VerticalTab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Modules </p>
          <VerticalTab> <BsFileText size = '2em' /> </VerticalTab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Applications </p>
          <VerticalTab> <IoChatbubblesOutline size = '2em' /> </VerticalTab>
          <p style = {{color: 'rgba(25, 175, 149, 1)', fontWeight: 'bold'}} > Messages </p>
        </VerticalTabList>
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
      </VerticalTabs>
      
      
    </div>
    
  )
}

export default App;
