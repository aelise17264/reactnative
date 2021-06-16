import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>It's Summer</Text> 
      <Button 
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
        //Native will create a Back button automatically to take the user back home
        />
      <Button
      style={styles.button}
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />  
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text> 
        </TouchableOpacity> */}
      <Button
      style={styles.button}
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
      /> 
      <Button
      style={styles.button}
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}
      /> 
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginVertical: 25
  }
});

export default HomeScreen;

