import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import GifList from '../components/gifs/GifList';

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

export default ProfileContainer;
