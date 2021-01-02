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
  Button,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

function App () {

  const [name, setName] = useState("Erick Giffoni");
  const [age, setAge] = useState(20);
  const [people, setPeople] = useState([
    {name: "Erick", age: 20, key: 1},
    {name: "Joice", age: 10, key: 2},
    {name: "Luan", age: 5, key: 3},
  ]);

  const clickHandler = () => {
    newName = "Josh";
    newAge = 30;
    //data = {name: newName, age: newAge};

    setName(newName);
    setAge(newAge);
    //setPerson(data);
  }

  const pressHandler = (key) => {
    console.log(key);
    setPeople( (prevPeople) => {
      return prevPeople.filter( person => person.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.people}
        data={people}
        renderItem={ ({item}) => (
          <TouchableOpacity onPress={ () => {pressHandler(item.key)}}>
            <Text style={styles.person}>Name: {item.name} -- Age: {item.age}</Text>
          </TouchableOpacity>
        ) } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
