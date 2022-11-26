import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ListScreen () {
    const friends =[
        {name: 'Candice', age: '30'},
        {name: 'Ian', age: '32'},
        {name: 'Maddie', age: '31'},
        {name: 'Becca', age: '33'},
        {name: 'Hannah', age: '28'},
    ]

    return (
    <FlatList 
        //horizontal //tells our list that we want our list to scroll left to right instead of up to down, a scrollbar will automatically generate
        //showsHorizontalScrollIndicator={false}//gets rid of the automatic scrollbar
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => { //destructured prop to directly reference each item of the element(list)
            return <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
            </Text>

    }} />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});

