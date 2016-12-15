import React, { Component, PropTypes} from 'react'
import {View} from 'react-native'
import Tab from './Tab'

/**
 * Categories Tab For Nav
 */
class CategoriesIcon extends Component {

  render() {

    let { title, selected } = this.props;
    console.log('selected: ', selected);
    return (
      <View>
        <Tab
          title={title}
          selected={selected}
          styles={{ marginBottom:-6, marginLeft:-5}}
          name={"logo"}
          size={30}
        />
      </View>
    );
  }
}

export default CategoriesIcon;
