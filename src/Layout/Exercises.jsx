import React from 'react';
import { View, Text } from 'react-native';

export default function Exercises({ route }) {
    const { params } = route;
    return (
        <View>
            <Text>{params.name}</Text>
            {/* Render exercises for the selected body part */}
        </View>
    );
}
