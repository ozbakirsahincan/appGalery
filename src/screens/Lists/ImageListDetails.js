import React from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';

export default function ImageListDetails({route}) {
  //console.log(route.params);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{padding:30,flex:1}}>
        <Image
          style={{
            flex:1,
          }}
          source={{uri: route.params.imageData.download_url}}
        />
      </View>
      <Text style={{textAlign:'center'}}>{route.params.imageData.author}</Text>
    </SafeAreaView>
  );
}
