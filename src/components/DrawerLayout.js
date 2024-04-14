import { View, Text, DrawerLayoutAndroid, Button, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'

const DrawerLayout = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
                <Button
                    title="Change Drawer Position"
                    onPress={() => changeDrawerPosition()}
                />
                <Text style={styles.paragraph}>
                    Swipe from the side or press button below to see it!
                </Text>
                <Button
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                />
            </View>
        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
});

export default DrawerLayout