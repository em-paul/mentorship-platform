// import { Admin, Resource, defaultTheme } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import { UsersList } from './components/UsersList';
// import { PostsList, PostCreate, PostEdit } from './components/PostsList';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/Group';
// import { Dashboard } from './components/Dashboard';
// import { theme } from './components/Theme';
// import authProvider from "./providers/authProvider";
import { RightPanel } from "./RightPanel";
import { MenteeProfile } from './MenteeProfile';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './react-tabs.css';
import { MyMentors } from './MyMentors';
import { Resources } from './Resources';
import { ProgramApplications } from './ProgramApplications';

import './App.css';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const App = () => (
//   <Admin 
//     // authProvider = {authProvider}
//     title="Mentorship Admin Platform"
//     theme={theme}
//     dashboard={Dashboard}
//     dataProvider={dataProvider}>
//     <Resource name="users" list={UsersList} icon={UserIcon} />
//     <Resource name="posts" list={PostsList} icon={PostIcon} edit={PostEdit} create={PostCreate} />
//     <Resource name="mentees" list={PostsList} icon={UserIcon} edit={PostEdit} create={PostCreate} />
//     <Resource name="mentors" list={PostsList} icon={UserIcon} edit={PostEdit} create={PostCreate} />
//     <Resource name="pairings" list={PostsList} icon={PostIcon} edit={PostEdit} create={PostCreate} />
//   </Admin>
// )

// const programProgress = [
//   {program: 'UK Program', progress: 72, color: 'rgb(59, 140, 217)'},
//   {program: 'US Program', progress: 35, color: 'rgb(253, 169, 41)'},
//   {program: 'Prep Program', progress: 0, color: 'rgb(239, 66, 0)'}
// ]

function App() {
  return (
    <div className = 'App'>
      <div className = 'main-body'>
        <div style = {{width: '60vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
          <Tabs>
            <TabList>
              <Tab > My Progress </Tab>
              <Tab > Program Applications </Tab>
              <Tab> Mentors </Tab>
              <Tab> Resources </Tab>
            </TabList>
            <TabPanel>
              <MenteeProfile name = 'Roberto Jimenez' pronouns = 'he/him/his' location = 'Huelva, Spain' />
            </TabPanel>
            <TabPanel>
              <ProgramApplications />
            </TabPanel>
            <TabPanel>
              <MyMentors />
            </TabPanel>
            <TabPanel>
              <Resources />
            </TabPanel>
          </Tabs>
          
          
        </div>
        
        <RightPanel />
      </div>
    </div>
  )
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
