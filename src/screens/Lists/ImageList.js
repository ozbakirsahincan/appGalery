import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';

const ImageList = ({imageData, navigation}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageListDetails', {imageData})}>
        <Image style={Styles.image} source={{uri: imageData.download_url}} />
      </TouchableOpacity>
      <View style={Styles.inner_container}>
        <Text style={Styles.author}> {imageData.author} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  
});

export default ImageList;
