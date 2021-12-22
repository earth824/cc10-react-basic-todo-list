import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todoList } = useContext(TodoListContext);

  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        {todoList.map(item => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
