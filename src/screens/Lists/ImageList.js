import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImageListDetails from './ImageListDetails';

const ImageList = ({imageData,navigation}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ImageListDetails',{imageData})}>
        <Image style={styles.image} source={{uri: imageData.download_url}} />
      </TouchableOpacity>
      <View style={styles.inner_container}>
        <Text style={styles.author}> {imageData.author} </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inner_container: {padding: 5},
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

export default ImageList;