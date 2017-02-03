import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import Colors from '../../styles/colors';

/**
 * TODO Step 3:
 *
 * 1. Add TouchableHighlight component with onPress property inside of render method
 * 2. Add onSelect(category) prop inside of an arrow function to 
 *    onPress on the TouchableHighlight
 * 3. Add Image Component with source property set to category.url inside render method
 * 4. Add Text component with category.title inside render  method
 */

class Category extends Component{

  render(){

    let { category, onSelect } = this.props;

    return (
      <View style={styles.container}>

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
