import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import CategoriesList from '../components/gifs/CategoriesList';

class CategoriesContainer extends Component{

  super(props) {
    this.handleSelection = this.handleSelection.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <CategoriesList 
          categories={[
            'kittens', 'fail', 'love', 
            'star wars', 'the office', 
            'trump', 'scream queens', 'dance'
          ]}
          onSelect={this.handleSelection}
        />
      </View>
    )
  }

  handleSelection(category) {
    console.log('handle category selection: ', category);
    console.log('handleSelection actions: ', Actions);
    Actions.gifs();
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

export default CategoriesContainer;
