import { View, Text, Image } from 'react-native';
import React from 'react';

export default function ExercisesDetails({ route }) {
    const { item } = route.params;
    return (
        <View>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.gifUrl }} style={{ width: 200, height: 200 }} />
            {/* Add more details about the exercise here */}
        </View>
    );
}
