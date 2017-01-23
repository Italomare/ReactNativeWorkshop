import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import Colors from '../../styles/colors';

class Category extends Component{

  render(){

    let { category, onSelect } = this.props;

    return(
     <View style={styles.container}>
       {/*
         1. Create TouchableHighlight
         2. Add onPress event handler for selecting a category
       */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    height: 120
  },
 overlay: {
   backgroundColor: 'rgba(48,51,58, 0.8)',
   alignItems: 'center',
   justifyContent: 'center',
 },
 asset: {
   justifyContent: 'flex-start',
   alignSelf:'stretch',
   width:400,
   height:120
 },
 text:{
   backgroundColor: 'rgba(48,51,58, 0.8)',
   paddingTop:50,
   alignSelf:'stretch',
   height:200,
   fontSize: 20,
   fontWeight:'bold',
   color: Colors.grey,
   marginTop:-125,
   textAlign:'center',
 }
})

Category.propTypes = {
  category: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Category;
