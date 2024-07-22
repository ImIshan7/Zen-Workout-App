import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainScreen from './src/Screens/MainScreen.jsx';
import HomeScreen from './src/Screens/HomeScreen.jsx';
import BodyParts from './src/Components/BodyParts.jsx';
import Exercises from './/src/Layout/Exercises.jsx';
import ExerciseDetails from './/src/Layout/ExercisesDetails.jsx'
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen
                        name="Main"
                        component={MainScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen name="BodyParts" component={BodyParts} />
                    <Stack.Screen name="Exercises" component={Exercises} />
                    <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
