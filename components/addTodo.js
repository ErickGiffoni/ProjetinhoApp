import React, { useState } from "react";
import { TextInput, Button, Text, StyleSheet, View } from "react-native";

const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <Text style={styles.text}>Add a new ToDo :</Text>
            <TextInput
                style={styles.input} 
                placeholder="e.g. buy bananas"
                placeholderTextColor="#8AA09C"
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title="ADD"  />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        color: "#E4B945",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    },
    text: {
        color: "#fff"
    }
});

export default AddTodo;