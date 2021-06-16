import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    //we don't modify state variables directly

    return (
    <View>
        <Text>This is the counter screen</Text>
        <Button title="+" onPress={() =>{
            setCounter(counter + 1)
        }}
         />
        <Button title="-" onPress={() => {
            setCounter(counter - 1)
        }}
        />
    </View>
)
};

const styles = StyleSheet.create({

})