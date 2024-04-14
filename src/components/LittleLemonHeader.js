import { Text, View } from "react-native";

export default function LittleLemonHeader() {
    return (
        <View style={{
            flex: 0.1, backgroundColor: '#F4CE14', alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                padding: 10, fontSize: 20, color: 'black',
                textAlign: "center",
                textAlignVertical: "center",
            }}>
                Little Lemon
            </Text>
        </View>
    );
}
