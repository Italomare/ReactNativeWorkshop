import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';

import CategoriesList from '../components/gifs/CategoriesList';

/**
 * TODO Step 3:
 *
 * 1. Add onSelect property to CategoriesList component 
 * 2. Pass handleSelection component method to CategoriesList onSelect property
 * 3. Add handleSelection component method
 * 4. Inside of handleSelection dynamically route to gifs using RouteActions.gifs()
 * 5. Bind the handleSelection component method inside of the constructor,
 *    i.e. this.handleSelection = this.handleSelection.bind(this)
 */

class CategoriesContainer extends Component{

  constructor(props){
    super(props);
    //5. this.handleSelection = this.handleSelection.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <CategoriesList
          categories={[
            {title:'kittens', url:'https://i.giphy.com/3o6Zt4ZQb0Peu0f1Oo.gif' },
            {title: 'fail', url:'https://i.giphy.com/3o85xxSZvFZgD4wXde.gif'},
            {title: 'love', url:'https://i.giphy.com/82PgcvLRXq4ms.gif'},
            {title: 'star wars', url:'https://i.giphy.com/bcbPzkSCytDH2.gif'},
            {title: 'the office', url:'https://i.giphy.com/yidUzriaAGJbsxt58k.gif'},
            {title: 'trump', url:'https://i.giphy.com/xT9DPDaFp65bRP0Ruo.gif'},
            {title: 'scream queens', url:'https://i.giphy.com/3oz8xXZ9n58kl59uSc.gif'},
            {title: 'dance', url:'https://i.giphy.com/3o6oziEt5VUgsuunxS.gif'},
          ]}
          //1.2. onSelect={this.handleSelection}
        />
      </View>
    )
  }

  /*3.
  handleSelection(category) {
    //4 .RouteActions.gifs();
  }
  */

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

export default CategoriesContainer;
