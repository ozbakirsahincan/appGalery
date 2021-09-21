import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

const Profile = props => {
  console.log(props);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Image style={styles.image} source={{uri: props.route.params.imageData}} /> */}
        <View style={styles.inner_container}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}> Description </Text>
          <Text style={styles.author}> Author </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {marginTop: 3},
  inner_container: {padding: 5},
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

export default Profile;
