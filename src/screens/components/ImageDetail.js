import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function ImageDetail (props) {
    return(
        <View style={styles.container}>
            <Text>{props.title}</Text>
            <Image source={props.imageSource} style={styles.images} />
            <Text>Image Score - {props.score}</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '250px',
        marginBottom: '2%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: '25%'
    },
    images: {
        height: '50%',
        width: '50%'
    }

})