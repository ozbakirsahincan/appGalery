import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import ImageList from '../Lists/ImageList';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const apiURL = 'https://picsum.photos/v2/list?page=2&limit=100';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      });
  };
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const renderImages = ({item}) => <ImageList navigation={navigation} imageData={item} />;
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Galery App</Text>
      </View>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderImages}
        keyExtractor={(item, index) => item.id.toString()}
        
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
});
export default Home;
