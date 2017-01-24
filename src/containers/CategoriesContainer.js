import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import CategoriesList from '../components/gifs/CategoriesList';

/**
 * Step 3:
 * - Add onSelect event handler and pass handleSelection compoent method to it
 * - Add handleSelection component method
 * - Set bind(this) to handleSelection
 */

class CategoriesContainer extends Component{

  constructor(props){
    super(props);

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
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

export default CategoriesContainer;
