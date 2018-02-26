import React, {Component} from "react";
import {Text, View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
  	console.log("HEERRRE~!!!!!!! is where we can debug!")
  	 axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  	 .then(response => { console.log("FILLLAAAYY!!!", response); this.setState({albums:response.data}) })
  }
  
  renderAlbums() {
    var rapLove = [{
    	artist: "2pac",
    	title: "Gangsta's Paradise", 
    	id: 1
    },{
      artist: "Carl Thomas",
    	title: "Emotional",
    	id: 2
    }]

  	var info = this.state.albums.length === 0 ? rapLove : this.state.albums
  	console.log("CURRENT STATE: ", info)
  	return info.map( album => <AlbumDetail key={album.title} album={album}  />)
  }

  render() {

  console.log("CURRENT STATE2: ", this.state.albums)

  return (
    <View>
      {this.renderAlbums()}
    </View> 
  )
  }
}




export default AlbumList