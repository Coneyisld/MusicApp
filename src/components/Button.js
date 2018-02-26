import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
  const { buttonStyle, textStyle } = styles;

  return (
  	<TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}> PURCHA$E </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5  
  },
  textStyle : {
  	alignSelf: 'center',
  	color: '#fff',
  	fontSize: 16,
  	fontWeight: '600',
  	paddingTop: 10,
  	paddingBottom: 10
  }
}

export default Button