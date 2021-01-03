import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#fff", //white
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        color: "#E4B945",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    }   
})

export default TodoItem;