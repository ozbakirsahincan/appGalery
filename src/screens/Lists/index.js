import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {styles} from './styles';

const ImageListDetails =({route}) => {
  const props = route.params.imageData;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
          }}
          source={{uri: props.download_url}}
        />
      </View>
      <Text style={styles.authorText}>{props.author}</Text>
    </SafeAreaView>
  );
}
export default ImageListDetails;