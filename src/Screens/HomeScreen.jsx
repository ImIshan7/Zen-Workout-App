import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../Components/ImageSlider';
import BodyParts from "../Components/BodyParts";

export default function Home() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar style="dark" />

            {/* punchline and avatar */}
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.headerText, styles.neutralText]}>
                        READY TO
                    </Text>
                    <Text style={[styles.headerText, styles.roseText]}>
                        WORKOUT
                    </Text>
                </View>

                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../../assets/images/avatar.png')}
                        style={styles.avatar}
                    />
                    <View style={styles.notificationContainer}>
                        <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            {/* image slider */}
            <View>
                <ImageSlider />
            </View>

            {/* body parts list */}

            <View>
                <BodyParts/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    textContainer: {
        marginBottom: 2,
    },
    headerText: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
        letterSpacing: 1.25,
    },
    neutralText: {
        color: '#4a4a4a',
    },
    roseText: {
        color: '#ff3b30',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
    },
    avatar: {
        height: hp(6),
        width: hp(6),
        borderRadius: hp(3),
    },
    notificationContainer: {
        backgroundColor: '#e5e5e5',
        borderRadius: hp(2.75),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#d1d1d1',
        height: hp(5.5),
        width: hp(5.5),
    },
});
