import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default ImageDetail = (props) => {
    return(
        <View>
        <Image source={require('../../assets/beach.jpg')} />
        <Text>{props.title}</Text>
        </View>
    )

};

const styles = StyleSheet.create({

})