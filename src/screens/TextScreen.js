import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export default function TextScreen() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')

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

            <Text>Enter Your Password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
         {password.length > 5 ? null : <Text> "Password must be longer than 5 characters" </Text>}   
            
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