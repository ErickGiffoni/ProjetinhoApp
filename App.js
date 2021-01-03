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
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo"

function App () {

 const [todos, setTodos] = useState([
   { text: "buy coffee", key: "1"},
   { text: "wash car", key: "2"},
   { text: "feed dog", key: "3"},
   { text: "get a shower", key: "4"},
   { text: "date a girl", key: "5"},
 ])
 
 const pressHandler = (key) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
 };

 const submitHandler = (text) => {
   setTodos((prevTodos) => {
     return [
       { text: text, key: Math.random().toString() },
       ...prevTodos
     ]
   })
 }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
