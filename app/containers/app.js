import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';

/*
 * TabBar Icons
 */
import TabIcon from '../components/Nav/CategoriesIcon';

/*
 * Views
 */
 import {Setup} from './SetupContainer'
 import {Categories} from './CategoriesContainer'
 import {Gifs} from './GifSelectionContainer'
 import {Profile} from './ProfileContainer'

// const TabIcon = ({ selected, title }) => {
//   return (
//     <Text style={{color: selected ? '#02C39A' :'#2A3D45'}}>{title}</Text>
//   );
// }

const App = () => {
    return(
      <Router>
        <Scene key="root" >
          {/* Tab container */}
         <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
           {/* Taba in TabBar */}
         <Scene key="idk" title="Setup" icon={TabIcon}>
            <Scene key="setup" component={Setup} title = 'Setup' />
         </Scene>
         <Scene key="gif" title="Gifs" icon={TabIcon}>
           <Scene key="categories" component={Categories} title="Categories" />
           <Scene key="gifs" component={Gifs} title="Gifs" />
         </Scene>
         <Scene key="prof" title="Profile" icon={TabIcon}>
           <Scene key="profile" component={Profile} title="Profile" />
        </Scene>
       </Scene>
      </Scene>
    </Router>
  )
}

export default App
