import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Category from './Category';

class CategoriesList extends Component{

  render(){

    // 4. Setup contructor
    // 5. Set bind(this) to getCategories

    return(
      <View style={styles.container}>
        {/*
          1. Create ScrollView to get the categories
          2. Call getCategories component method inside of ScrollView component
          */}
      </View>
    )
  }

  // 3. Add getCategories component method
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
