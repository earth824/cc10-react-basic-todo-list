import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import * as localStorageService from '../services/localStorage';

const TodoListContext = createContext();

function TodoListContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get('/todos');
      setTodoList(res.data.todos);
    };
    fetchTodo();
  }, []);

  const addTodo = async value => {
    const res = await axios.post('/todos', value);
    setTodoList(prev => [res.data.todo, ...prev]);
  };

  const updateTodo = async (id, value) => {
    const idx = todoList.findIndex(item => item.id === id);
    if (idx !== -1) {
      await axios.put('/todos/' + id, {
        ...todoList[idx],
        ...value
      });
      const newTodoList = [...todoList];
      newTodoList[idx] = {
        ...todoList[idx],
        ...value
      };
      setTodoList(newTodoList);
    }
  };

  const deleteTodo = async id => {
    const idx = todoList.findIndex(item => item.id === id);
    if (idx !== -1) {
      await axios.delete('/todos/' + id);
      const newTodoList = [...todoList];
      newTodoList.splice(idx, 1);
      setTodoList(newTodoList);
    }
  };

  return (
    <TodoListContext.Provider
      value={{ todoList, addTodo, updateTodo, deleteTodo }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
export { TodoListContext };
