import { ChangeEvent, FC, useState } from 'react';
import { ITodo } from '../interfaces/todo';
import TodoCard from '../components/TodoCard';

const Todo: FC = () => {
  const [todoName, setTodoName] = useState<string>('');
  const [todoDescription, setTodoDescription] = useState<string>('');
  const [todoDeadline, setTodoDeadline] = useState<Date | any>('');
  const [todoClass, todoSetClass] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  // function to reset states
  const resetTodoStates = (): void => {
    setTodoName('');
    setTodoDescription('');
    setTodoDeadline('');
  };

  // function to get input from input fields and assings them to states
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'todoName':
        setTodoName(event.target.value);
        break;
      case 'todoDescription':
        setTodoDescription(event.target.value);
        break;
      case 'todoDeadline':
        setTodoDeadline(event.target.value);
    }
  };

  // function to add todo to todo array
  const addTodo = (): void => {
    if (!(todoName === '' || todoDescription === '' || todoDeadline === '')) {
      let newTodo = {
        todoName: todoName,
        todoDescription: todoDescription,
        todoDeadline: todoDeadline,
      };
      setTodos([...todos, newTodo]);
      resetTodoStates();
    } else {
      alert('All of the required fields must be filled!');
    }
  };

  return (
    <div className="view view-todo">
      <h1>Todo</h1>

      <div className="todo-inputs">
        {/* todo name input */}
        <input
          className="input-field"
          type="text"
          placeholder="Name..."
          name="todoName"
          value={todoName}
          onChange={handleChange}
        />

        {/* todo description input */}
        <input
          className="input-field"
          type="text"
          placeholder="Description..."
          name="todoDescription"
          value={todoDescription}
          onChange={handleChange}
        />

        {/* todo deadline input */}
        <input
          className="input-field"
          type="date"
          name="todoDeadline"
          value={todoDeadline}
          placeholder="Deadline..."
          onChange={handleChange}
        />
      </div>

      <button className="button" onClick={addTodo}>
        <span>Add todo!</span>
      </button>

      <div>
        {todos.map((todo: ITodo, key: number) => {
          return <TodoCard key={key} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
