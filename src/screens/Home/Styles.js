import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4fcff',
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  itemImage: {
    resizeMode: 'cover',
    width: '50%',
    height: 200,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
