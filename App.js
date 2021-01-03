/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  //Button,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Header from "./components/header"


function App () {

 const [todos, setTodos] = useState([
   { text: "buy coffee", key: "1"},
   { text: "wash car", key: "2"},
   { text: "feed dog", key: "3"},
   { text: "get a shower", key: "4"},
   { text: "date a girl", key: "5"},
 ]) 

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#294D4E",
    //alignItems: "center",
    //justifyContent: "center",
    //padding: 40,
  },
  content: {
    padding: 45,
  },
  list: {
    marginTop: 20,
  },
  people: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: "center",
    //justifyContent: "center",
    marginBottom: 25,
    marginTop: 15,
  },
  person: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "lightgreen",
    fontSize: 24,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 200
  }
});

export default App;
