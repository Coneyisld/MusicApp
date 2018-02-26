//import library to help create component
import React from 'react'; 
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//create a component
const App = () => { 
  
  return (
  	<View>
  	  <Header headerText="Albums"/>
      <AlbumList />
    </View>
  	)
}





//render component to device
AppRegistry.registerComponent('albums', () => App)