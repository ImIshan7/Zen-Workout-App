import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel'

const { width: viewportWidth } = Dimensions.get('window');

const sliderImages = [
    { image: require('../../assets/images/slide1.png') },
    { image: require('../../assets/images/slide3.png') },
    { image: require('../../assets/images/slide2.png') },
    { image: require('../../assets/images/slide4.png') },
    { image: require('../../assets/images/slide5.png') },
];

export default function ImageSlider() {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                width={viewportWidth}
                height={viewportWidth * 0.6}
                data={sliderImages}
                renderItem={renderItem}
                scrollAnimationDuration={1000}
            />
        </View>
    );
}

const ItemCard = ({ item, index, parallaxProps }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: viewportWidth * 0.8,
        height: viewportWidth * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
