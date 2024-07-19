import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../Constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyParts() {
    const navigation = useNavigation();
    return (
        <View className="mx-4 mt-56">
            <Text style={{ fontSize: hp(4) }} className="font-semibold text-black">
                Exercises
            </Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                renderItem={({ item, index }) => <BodyPartCard navigation={navigation} index={index} item={item} />}
            />
        </View>
    );
}

const BodyPartCard = ({ item, navigation, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Exercises', item)}
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4"
            >
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: wp(44), height: wp(52) }}
                    className="rounded-[35px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-b-[35px]"
                />

                <Text
                    style={{ fontSize: hp(2.3) }}
                    className="text-white font-semibold text-center tracking-wide"
                >
                    {item?.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};
