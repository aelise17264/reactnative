import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from './components/ImageDetail';

export default ImageScreen = () => {
    return (
    <View>
        <ImageDetail score={9} title="Forest" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail score={12} title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail score={5} title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
        {/* creates separate copies of this component */}
    </View>
)
};

const styles = StyleSheet.create({

})