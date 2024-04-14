import React from 'react'
import { Text } from 'react-native'

export default function MyAppText() {
    return (
        <Text style={{ fontWeight: 'bold' }}>
            I am bold
            <Text style={{ color: 'red' }}>and red</Text>
        </Text>
    )
}
