
// @ts-ignore
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image style={styles.image} source={require('../../assets/images/welcome01.jpg')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={styles.gradient}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.animatedView}>
                    <Text style={[styles.text, styles.title]}>
                        Best <Text style={styles.highlight}>Workouts</Text>
                    </Text>
                    <Text style={[styles.text, styles.title]}>For You</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.animatedView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Let's Go</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    gradient: {
        width: wp(100),
        height: hp(70),
        justifyContent: 'flex-end',
        paddingBottom: 12,
    },
    animatedView: {
        alignItems: 'center',
        marginBottom: 8,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
       /* trackingWide: true,*/
    },
    title: {
        fontSize: hp(5),
        color: 'white',
    },
    highlight: {
        color: 'red',
    },
    button: {
        height: hp(7),
        width: wp(60),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red',
    },
    buttonText: {
        fontSize: hp(3),
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
});
