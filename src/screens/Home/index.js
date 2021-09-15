import React, {
    useState
} from 'react'
import { View, ScrollView } from 'react-native'
import ImageList from '../Home/ImageList'

const Home = (props) => {
    const [image, setImage] = useState([])

    const renderList = () => {
        return image.map((item) => {
            return <ImageList key={item.image[0].id} />
        })
    }

    return (
        <View style={[{ flex: 1, paddingTop: 33 }]}>
            <ScrollView >
                {renderList()}
            </ScrollView>
        </View>
    )
}
export default Home