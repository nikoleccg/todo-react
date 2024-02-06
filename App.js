// import { React } from 'react' 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TodoList } from './TodoList';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { Fragment } from 'react';
import './TodoItem.css'
import './TodoList.css'

const defaultTodos = [
  {text: "Limpiar la casa", completed: true},
  {text: "Sacar a pasear al perro", completed: false},
  {text: "Votar la basura", completed: false},
  {text: "Estudiar portugues", completed: false},
]

export default function App() {
  const totalTodos = defaultTodos.length;
  const completedTodos = defaultTodos.filter(todo => todo.completed).length;

  return (
    <View style={styles.container}>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
