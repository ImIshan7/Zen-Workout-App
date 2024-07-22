import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseDetails() {
    const route = useRoute();
    const navigation = useNavigation();
    /*const { gifUrl, name, equipment, secondaryMuscles, target, instructions } = route.params;*/
    const { item } = route.params;
    const instructions=item.instructions;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, backgroundColor: 'white', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <Image
                    source={{ uri: item.gifUrl }}
                    style={{ width: wp(100), height: wp(100) }}
                    /*className="w-[300px] h-[300px]"*/

                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', top: 10, right: 10 }}
            >
                <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details */}
            <ScrollView style={{ marginHorizontal: 16, marginTop: 16 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()}
                    style={{ fontSize: hp(3.5), fontWeight: 'bold', color: '#2d2d2d', marginBottom: 10 }}
                >
                    {item.name}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(100).duration(300).springify()}
                    style={{ fontSize: hp(2), color: '#555', marginBottom: 5 }}
                >
                    Equipment: <Text style={{ fontWeight: 'bold', color: '#2d2d2d' }}>{item.equipment}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(200).duration(300).springify()}
                    style={{ fontSize: hp(2), color: '#555', marginBottom: 5 }}
                >
                    Secondary Muscles: <Text style={{ fontWeight: 'bold', color: '#2d2d2d' }}>{item.secondaryMuscles}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2), color: '#555', marginBottom: 5 }}
                >
                    Target: <Text style={{ fontWeight: 'bold', color: '#2d2d2d' }}>{item.target}</Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()}
                    style={{ fontSize: hp(3), fontWeight: 'bold', color: '#2d2d2d', marginBottom: 10 }}
                >
                    Instructions
                </Animated.Text>

                {Array.isArray(instructions) ? (
                    instructions.map((instruction, index) => (
                        <Animated.Text
                            entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
                            key={`${instruction}-${index}`} // Use a unique key for each instruction
                            style={{ fontSize: hp(1.7), color: '#2d2d2d', marginBottom: 5 }}
                        >
                            {instruction.trim()}
                        </Animated.Text>
                    ))
                ) : (
                    <Animated.Text
                        entering={FadeInDown.delay(400).duration(300).springify()}
                        style={{ fontSize: hp(1.7), color: '#2d2d2d', marginBottom: 5 }}
                    >
                        No instructions available.
                    </Animated.Text>
                )}
            </ScrollView>
        </View>
    );
}
