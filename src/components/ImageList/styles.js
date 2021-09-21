import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
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
