import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';
import { Provider } from 'react-redux';

import configureStore from './store/store'

/**
 * TODO Step 4: 
 *
 * 1. Create Redux store with imported configureStore function.
 * 2. Wrap Router Component with imported Provider Component 
 * 3. Pass the configured store to the store property of the Provider Component
 */

/*
 * Containers (Views)
 */
 import WelcomeScene from './scenes/WelcomeScene'
 import LoginScene from './scenes/LoginScene'
 import CategoriesScene from './scenes/CategoriesScene'
 import GifSelectionScene from './scenes/GifSelectionScene'
 import ProfileScene from './scenes/ProfileScene'

/*
 * TabBar Icons
 */
import TabIcon from './components/navigation/Tab';

const App = () => {
  return(
    <Router>
      <Scene key="root" >
        <Scene key="Welcome" initial={true} component={WelcomeScene} title='Welcome' direction="vertical"/>
        <Scene key="login" component={LoginScene} title='Login' direction="vertical"/>
        {/* Tab container */}
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
          {/* Tabs in TabBar */}
          <Scene key="gif" title="Gifs" icon={TabIcon} initial={true}>
            <Scene key="categories" component={CategoriesScene} title="Categories" />
            <Scene key="gifs" component={GifSelectionScene} title="Gifs" />
          </Scene>
          <Scene key="prof" title="Profile" icon={TabIcon}>
            <Scene key="profile" component={ProfileScene} title="Profile" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  )
}

export default App
