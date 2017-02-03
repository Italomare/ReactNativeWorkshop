import React, { Component } from 'react'
import {Text} from 'react-native'

/**
 * Navigation Tab
 */
const Tab = ({selected, title}) => {

  let defaultStyles = {
    color: selected ? '#19e3c6' :'black',
    alignItems: 'flex-start',
    fontSize: 12,
    marginBottom: -6,
    marginLeft: -5
  };

  return (
    <Text style={defaultStyles}>{title}</Text>
  );

};

export default Tab;