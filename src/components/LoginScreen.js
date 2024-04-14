import { Text, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShow] = useState(true);
    const handleLogin = () => {
        // Perform login logic here...

        // After successful login, navigate to Main screen and reset the stack
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue</Text>
            <View style={styles.inputForm}>
                <TextInput
                    value={email}
                    editable
                    multiline
                    maxLength={50}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                    placeholder="email"
                    keyboardType='email-address'
                    style={styles.input}
                />
                <View style={styles.containerPass}>
                    <TextInput
                        value={password}
                        editable
                        maxLength={10}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        placeholder="password"
                        keyboardType='default'
                        secureTextEntry={showPass}
                        style={[styles.input, styles.passwordInput]}
                    />
                    <TouchableOpacity style={styles.toggleButton} onPress={() => setShow(!showPass)}>
                        <Ionicons name={showPass ? 'eye-off' : 'eye'} size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 0.15, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Pressable onPress={handleLogin}>
                    <Text style={styles.textStyleTitle}>Login</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputForm: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    emailInput: {
        width: '100%', // Set email input width to 100% for consistency
    },
    containerPass: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative', // Required for absolute positioning of toggleButton
    },
    toggleButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    passwordInput: {
        paddingRight: 40, // Adjusted paddingRight to accommodate the toggle button
        width: '100%', // Set password input width to 100% for consistency
    },
})