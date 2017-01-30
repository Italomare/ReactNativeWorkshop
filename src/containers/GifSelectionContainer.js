import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import SelectionCarousel from '../components/gifs/SelectionCarousel';

/**
 * Step 4:
 * - Setup lifecycle method when we reach the end of our gif list
 * - Setup Actions for likes
 * - Setup Actions for dislikes
 * - mapStateToProps function
 * - mapDispatchToProps function
 * - connect function
 */

class GifSelectionContainer extends Component{

  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);

    this.state = {
      active: 1,
      gifs: {
        1: {id: 1, uri: 'https://i.giphy.com/xThuWg7lusylvpAVu8.gif'},
        2: {id: 2, uri: 'https://i.giphy.com/l2YWeYNrD6P5nCiCA.gif'},
        3: {id: 3, uri: 'https://i.giphy.com/xTk9ZZCndSIbxjRO8w.gif'},
        4: {id: 4, uri: 'https://media.giphy.com/media/26FLeFK9dfmg6xq12/source.gif'},
        5: {id: 5, uri: 'https://i.giphy.com/3ohfFn9vOub5BsZZ0k.gif'}
      }
    };

  }

  render(){

    let { gifs, active } = this.state;

    return(
      <View style={styles.container}>
        <SelectionCarousel
          gif={gifs[active]}
          onLike={this.handleLike}
          onDislike={this.handleDislike}
        />
      </View>
    )
  }

  handleLike(id) {
    console.log('handleLike: ', id);
    this.setState({active: ++id});
  }

  handleDislike(id) {
    console.log('handleDislike: ', id);
    this.setState({active: ++id});
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

export default GifSelectionContainer;
