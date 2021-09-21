import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

const ImageList = ({imageData, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageListDetails', {imageData})}>
        <Image style={styles.image} source={{uri: imageData.download_url}} />
      </TouchableOpacity>
      <View style={styles.inner_container}>
        <Text style={styles.author}> {imageData.author} </Text>
      </View>
    </View>
  );
};

export default ImageList;
