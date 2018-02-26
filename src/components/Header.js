//import libraries to make a component

import React from 'react';
import {Text, View} from 'react-native';


//make a component the same name as the file name

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
  	<View style={viewStyle}>
  	  <Text style={textStyle}> {props.headerText} </Text>
  	</View>
  	)
}


//styling the page
const styles = {
	viewStyle: {
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      paddingTop: 15, 
      shadowColor: "black",
      shadowOffset: {width: 0 , height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: "relative"

	},
	textStyle: {
		fontSize: 20
	}
}

//make component available to other parts of app
export default Header