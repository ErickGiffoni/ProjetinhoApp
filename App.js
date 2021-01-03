import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  //Button,
  View,
  TouchableWithoutFeedback,
  Alert,
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
   if(text.length > 3){
     if( !todos.find( (element) => {
       return element.text == text;
      })){ //add only if new ToDo does not exist already
       setTodos((prevTodos) => {
         return [
           { text: text, key: Math.random().toString() },
           ...prevTodos
         ]
       })
     }
     else{
       console.log(text + " already exists...");
       Alert.alert("Oops", "ToDo must be 4 chars long and must not already exist");
     }
   }
  
 }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
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
    </TouchableWithoutFeedback>
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
