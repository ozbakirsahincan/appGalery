import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f4fcff',
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  headerText: {fontSize: 25, fontWeight: 'bold',textAlign: 'center'},
});
