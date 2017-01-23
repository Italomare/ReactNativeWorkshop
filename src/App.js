import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';

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
import TabIcon from './components/Nav/Tab';

const App = () => {
  return(
    <Router>
      {/*
        Step 2: Define route scenes
      */}
    </Router>
  )
}

export default App
