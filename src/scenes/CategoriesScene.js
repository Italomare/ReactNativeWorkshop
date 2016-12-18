import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CategoriesScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Categories Scene</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'#05668D'
  }
})

export default CategoriesScene;
