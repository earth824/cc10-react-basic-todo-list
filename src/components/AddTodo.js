import { useContext, useState } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';

function AddTodo() {
  const { addTodo } = useContext(TodoListContext);
  const [title, setTitle] = useState('');

  const handleSubmitForm = async e => {
    e.preventDefault();
    addTodo({ title, completed: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="input-group">
          <input
            type="text"
            className={`form-control rounded-0`}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button className="btn btn-success rounded-0">
            <i className="fas fa-plus" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
