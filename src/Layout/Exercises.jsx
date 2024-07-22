// screens/Exercises.js
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchExercisesByBodypart } from '../Api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Exercises({ route, navigation }) {
    const [exercises, setExercises] = useState([]);
    const { name, image } = route.params;

    useEffect(() => {
        if (name) getExercises(name);
    }, [name]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    };

    return (
        <ScrollView>
            <StatusBar style="light" />
            <Image
                source={image}
                style={{ width: wp(100), height: hp(45) }}
                className="rounded-b-[40px]"
            />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>

            {/* exercises */}
            {/* <View className="mx-4 space-y-3 mt-4">
                <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                    {name} exercises
                </Text>
                <View className="mb-10">
                    <ExerciseList data={exercises} />
                </View>
            </View> */}
        </ScrollView>
    );
}
