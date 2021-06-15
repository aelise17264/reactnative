import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default ComponentsScreen = () => {
    const yourname = <Text style={styles.nameStyle}>My name is Anna</Text>
    return (
        <View>
            <Text style={styles.headingStyle}>Getting started with React Native!</Text>
            {yourname}
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    headingStyle:{
        fontSize: 45,
    },
    nameStyle:{
        fontSize: 20
    }

})