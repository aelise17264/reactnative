import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from './components/ImageDetail';

export default ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Mountain"/>
        {/* creates separate copies of this component */}
    </View>
)
};

const styles = StyleSheet.create({

})