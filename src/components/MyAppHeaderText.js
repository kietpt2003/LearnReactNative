import React from 'react'
import MyAppText from './MyAppText'
import { Text } from 'react-native'

export default function MyAppHeaderText({ children }) {
    return (
        <MyAppText>
            <Text style={{ fontSize: 20 }}>{children}</Text>
        </MyAppText>
    )
}
