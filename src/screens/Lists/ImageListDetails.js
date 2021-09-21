import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Styles from './Styles';

export default function ImageListDetails({route}) {
  const props = route.params.imageData;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.detailContainer}>
        <Image
          style={{
            flex: 1,
          }}
          source={{uri: props.download_url}}
        />
      </View>
      <Text style={Styles.detailAuthorText}>{props.author}</Text>
    </SafeAreaView>
  );
}
