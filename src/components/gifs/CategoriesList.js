import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Category from './Category';

/**
 * Step 3:
 * - Setup contructor
 * - Create ScrollView to get the categories
 * - Call getCategories component method inside of ScrollView component
 * - Add getCategories component method
 * - Map over categories and pass category and onSelect to Category
 * - Set bind(this) to getCategories
 */

class CategoriesList extends Component{

  render(){

    return(
      <View style={styles.container}>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CategoriesList;
