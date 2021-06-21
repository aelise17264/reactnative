import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export default TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Your Name:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newName) => setName(newName)}
            />
            <Text>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})