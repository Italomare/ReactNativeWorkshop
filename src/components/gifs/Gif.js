import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Gif extends Component{

  render(){

    let { gifUri } = this.props;

    return(
      <View style={styles.container}>
        <Image soure={{ uri: gifUri }} style={styles.gif} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  gif:{
    width:300,
    height:400
  }

})

Gif.propTypes = {
  gifUri: PropTypes.string.isRequired
}

export default Gif;
