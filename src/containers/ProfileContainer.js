import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import GifList from '../components/gifs/GifList';

/**
 * TODO Step 4:
 *
 * 1. Delete this.state and object inside of component constructor (state is being handled with Redux)
 * 2. Add componentWillMount component lifecycle method to ProfileContainer 
 * 3. Inside of componentWillMount use redux Actions.getLikes() to retrieve all liked gifs
 * 4. Setup variable that gets user gifs from props or assigns an empty object to the variable 
 */

class ProfileContainer extends Component{

  constructor(props) {
    super(props);

    this.state = {
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
    return(
      <View style={styles.container}>
        <GifList gifs={this.state.gifs} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
