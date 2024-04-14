import { Text, View } from "react-native";

export default function LittleLemonFooter() {
    return (
        <View
            style={{
                backgroundColor: '#F4CE14',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text
                style={{
                    fontSize: 18,
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}>
                All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}
