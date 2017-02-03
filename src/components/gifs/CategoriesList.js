import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Category from './Category';

/**
 * TODO Step 3:
 *
 * 1. Setup component class contructor
 * 2. Add ScrollView component inside the render method 
 * 3. Call getCategories() component method inside of ScrollView component.
 *    i.e. {this.getCategories()}
 * 4. Add getCategories component method
 * 5. Map over categories and pass as props category and onSelect to the 
 *    Category component.
 * 6. Bind the getCategories component method inside of the constructor,
 *    i.e. this.getCategories = this.getCategories.bind(this)
 */

class CategoriesList extends Component{

  /*1.
  constructor(props) {
    super(props);
    //6. this.getCategories = this.getCategories.bind(this);
  }
  */

  render(){

    return(
      <View style={styles.container}>
        {/*2.3.
        <ScrollView>
          {this.getCategories()} 
        </ScrollView>
        */}
      </View>
    )
  }

  /*4.5.
  getCategories() {
    let {categories, onSelect} = this.props;

    return categories.map((category, i) => {
      return (<Category key={i} category={category} onSelect={onSelect} />);
    });

  }
  */

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CategoriesList;
