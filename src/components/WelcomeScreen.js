import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';

// const WelcomeScreen = ({ textStyle, viewStyle, textStyleTitle }) => {
const WelcomeScreen = ({ navigation }) => {

    return (
        <>
            <View style={{
                flex: 0.15, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Pressable onPress={() => navigation.navigate('Welcome', { screen: 'XYZ' })}>
                    <Text style={styles.textStyleTitle}>Welcome to Little Lemon</Text>
                </Pressable>
            </View>
            <ScrollView
                style={{ flex: 1 }}
            // showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        // paddingHorizontal: 30,
    },
    textStyleTitle: {
        fontSize: 30,
        color: 'white',
        textAlign: "center",
        textAlignVertical: "center",
    },
    textStyle: {
        color: 'white',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 50,
    },
});

export default WelcomeScreen