import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default ListScreen = () => {
    const friends =[
        {name: 'Candice'},
        {name: 'Ian'},
        {name: 'Maddie'},
        {name: 'Becca'},
        {name: 'Hannah'},
    ]

    return (
    <FlatList 
        data={friends} 
        renderItem={({item}) => { //destructured prop to directly reference each item of the element(list)
            return <Text>{item.name}</Text>

    }} />
    )
};

const styles = StyleSheet.create({});

