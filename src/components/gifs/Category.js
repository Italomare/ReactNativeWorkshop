import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '../../styles/colors'

class Category extends Component{

  render(){

    let { category, onSelect } = this.props;

    return(
      <TouchableHighlight onPress={() => onSelect(category)}>
        <View style={styles.container}>
          <Text style={styles.text}>{category}</Text>
        </View>
      </TouchableHighlight>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    height: 120 
  },
  text: {
    color: Colors.grey
  }
})

Category.propTypes = {
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Category;
