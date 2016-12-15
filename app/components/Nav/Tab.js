import React, { Component, PropTypes} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//import Icon from './icon';

/**
 * Navigation Tab
 */
const Tab = (props) => {

  let { selected, title, asset, styles, name, size } = props;

  console.log('tab selected: ', selected);

  let defaultStyles = {
    color: selected ? '#19e3c6' :'black',
    alignItems:'flex-start',
    fontSize:12,
  };
  let iconStyles = {
    color: selected ? '#19e3c6' :'black',
    alignItems:'center',
    fontSize:25,
  }

  return (
    <View>
      {/* <Icon style={Object.assign({}, iconStyles)} src={name} size={size} styles={styles}/> */}
      <Text style={Object.assign({}, defaultStyles)}> {title} </Text>
    </View>
  );


};

Tab.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.boolean,
  name: PropTypes.string,
  styles: PropTypes.object,
  size: PropTypes.number
};

export default Tab;
