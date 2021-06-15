import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  
  return (
    <View>
      <Text style={styles.text}>It's Summer</Text> 
      <Button 
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
        //Native will create a Back button automatically to take the user back home
        />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text> 
        {/* can put as many blocks of text inside a TouchableOpacity */}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

