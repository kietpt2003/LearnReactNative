import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageLearn = () => {
    return (
        <View>
            <Image
                style={{
                    // tintColor: 'blue',
                    borderColor: 'red',
                    borderWidth: 5,
                    resizeMode: 'contain',
                    height: 100,
                    width: 200,
                    backgroundColor: 'green'
                }}
                // source={require('../AwesomeProject/assets/adaptive-icon.png')}
                source={{
                    uri: "https://i.vimeocdn.com/portrait/58832_300x300.jpg"
                }}
            />
            <Text>resizeMode : contain</Text>
        </View>
    )
}

export default ImageLearn