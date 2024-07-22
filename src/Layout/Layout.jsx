import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Layout() {
    LogBox.ignoreLogs(["Warning: Failed prop type"])
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Exercises" options={{
                presentation: 'fullScreenModal'
            }} />

            <Stack.Screen name="ExerciseDetails" options={{
                presentation: 'modal'
            }} />
        </Stack>
    )
}