import React from "react"
import { View, Text, Image } from "react-native";
import Card from './Card'
import CardSection from './CardSection'



const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, image, imageStyle } = styles

  return (
        <Card>
          <CardSection>
          <View style= {thumbnailContainerStyle}>
            <Image  
              style={styles.thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style= {headerTextStyle}>{title} </Text>
            <Text>By: {artist} </Text>
          </View>
          </CardSection>
          <CardSection>
            <Image style={imageStyle} source={{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/ItsdarkDMX.jpg/220px-ItsdarkDMX.jpg"}}/>
          </CardSection>
        </Card>
  )
}

const styles = {
  headerContentStyle: {
	flexDirection: 'column',
	justifyContent: 'space-around'
  }, 
  headerTextStyle : {
    fontSize: 18
  },
  thumbnailStyle : {
    height: 50,
    width: 50
  }, 
  thumbnailContainerStyle : {
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginLeft: 10,
  	marginRight: 10
  }, 
  imageStyle : {
  	width : null,
  	height: 300,
  	flex: 1
  }
}

export default AlbumDetail
