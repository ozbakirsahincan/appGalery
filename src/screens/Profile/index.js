import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {styles} from './styles';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}> Description </Text>
          <Text style={styles.author}> Author </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
