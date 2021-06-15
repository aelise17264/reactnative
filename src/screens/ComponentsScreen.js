import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default ComponentsScreen = () => {
    const greeting = <Text>Welcome to the App!</Text>
    return (
    <View>
        <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
        {greeting}
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }

})