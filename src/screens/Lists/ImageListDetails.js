import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

export default function ImageListDetails({route}) {
  //console.log(route.params);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Image
          style={{
            flex:1,
          }}
          source={{uri: route.params.imageData.download_url}}
        />
      </View>
      <Text style={styles.authorText}>{route.params.imageData.author}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{padding:30,flex:1},
    authorText:{textAlign:'center'}
})