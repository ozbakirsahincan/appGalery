import React, {
    useState
} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

const Home = () => {
    const [image, setImage] = useState([
        {
            id: "",
            imageUrl: ""
        }
    ])

    const renderList = () => {
        return image.map((item) => {
            return <View></View>
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView >
                {renderList()}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 33,
        flex: 1,
    }
});
export default Home;