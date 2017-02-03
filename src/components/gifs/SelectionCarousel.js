import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Colors from '../../styles/colors';

import Gif from './Gif';

/**
 * TODO Step 3:
 *
 * 1. Destructure gif, onLike, onDislike from this.props inside the render 
 *    component method.
 * 2. Add Gif component inside of View with gifContainer styles
 * 3. Define gifUri prop on Gif component and pass gif.uri from props to it 
 * 4. Add first Button component with onPress property. This will be the dislike button.
 *    Pass the onDislike(gif.id) inside of an arrow function to the onPress property.
 *    i.e. onPress={() => onDislike(gif.id)}
 * 5. Add styles to dislike button
 * 6. Add second Button component with onPress property. This will be the like button.
 *    Pass the onLike(gif.id) inside of an arrow function to the onPress property.
 *    i.e. onPress={() => onLike(gif.id)}
 * 7. Add styles to like button
 */

class SelectionCarousel extends Component{

  render(){

    /*1.
    let { gif, onLike, onDislike } = this.props;
    */

    return(
      <View style={styles.container}>
        <View style={styles.gifContainer}>
        {/*2.3. <Gif gifUri={gif.uri} />*/}
        </View>
        <View style={styles.buttonContainer}>
          {/*4.5.
          <Button onPress={() => onDislike(gif.id)} style={styles.dislikeButton}>
            Dislike
          </Button>
          */}
          {/*6.7.
          <Button onPress={() => onLike(gif.id)} style={styles.likeButton}>
            Like 
          </Button>
          */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:Colors.black
  },
  gifContainer:{
    flex: 8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dislikeButton: {
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.grey,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    marginTop:60,
    fontSize:17,
    letterSpacing:3
  },
  likeButton: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    color: Colors.yellow,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:45,
    paddingRight:45,
    marginTop:60,
    fontSize:17,
    letterSpacing:3
  }
})

SelectionCarousel.propTypes = {
  gif: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired
}

export default SelectionCarousel;
