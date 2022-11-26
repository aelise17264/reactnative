import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        default:
            return state;
    }
}

export default function CounterScreen() {
    const [state, dispatch] = useReducer(reducer, { count: 0})

    return(
        <View>
            <Text>This is the counter screen</Text>
           <Button title="+" onPress={() =>{
            dispatch({type: 'increment', payload: 1})
        }}
         />
        <Button title="-" onPress={() => {
        dispatch({type: 'decrement', payload: 1})

        }}
        />
        <Text>Current Count: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

// export default CounterScreen = () => {
//     const [counter, setCounter] = useState(0);
//     //we don't modify state variables directly

//     return (
//     <View>
//         <Text>This is the counter screen</Text>
//         <Button title="+" onPress={() =>{
//             setCounter(counter + 1)
//         }}
//          />
//         <Button title="-" onPress={() => {
//             setCounter(counter - 1)
//         }}
//         />
//         <Text>Current Count: {counter}</Text>
//     </View>
// )
// };