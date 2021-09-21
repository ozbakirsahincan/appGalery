import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import ImageList from '../Lists/ImageList';
import Styles from './Styles';

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

  const renderImages = ({item}) => (
    <ImageList navigation={navigation} imageData={item} />
  );
  return (
    <SafeAreaView>
      <View>
        <Text style={Styles.headerText}>Galery App</Text>
      </View>
      <FlatList
        style={Styles.container}
        data={data}
        renderItem={renderImages}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
