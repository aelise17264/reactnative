//reconfigured Square Screen code to utilize Reducers
//Square Screen1 has original code that also works

import React, {useReducer} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15
//action = what change are we making to state
const reducer =(state, action) => {
    switch(action.colorToChange){
        case 'red':
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
        default:
            return state;

    }

}

export default SquareScreen = () => {    
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0}); 
    //setting initial state value for each color   
    const { red, green, blue} = state;
    return (
        <View>
            <ColorCounter 
            onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT}) } 
            onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT}) }
            color="Red"
            />
            <ColorCounter 
            onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT}) } 
            onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT}) }
            color="Green"

            />
            <ColorCounter 
            onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT}) } 
            onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT}) }
            color="Blue"

            />
            <View style={{
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }} />
            </View>
)
};

const styles = StyleSheet.create({

})