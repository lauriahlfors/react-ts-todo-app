import { ChangeEvent, FC, useState } from 'react';
import { ITodo } from '../interfaces/todo';
import TodoCard from '../components/TodoCard';

const Todo: FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<Date | any>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'description':
        setDescription(event.target.value);
        break;
      case 'deadline':
        setDeadline(event.target.value);
    }
  };

  const resetTodoStates = (): void => {
    setName('');
    setDescription('');
    setDeadline('');
  };

  const addTodo = (): void => {
    if (!(name === '' || description === '' || deadline === '')) {
      let newTodo = {
        name: name,
        description: description,
        deadline: deadline,
      };
      setTodos([...todos, newTodo]);
      resetTodoStates();
    } else {
      alert('Both name and deadline must be set');
    }
  };

  return (
    <div className="view view-todo">
      <h1>Todo</h1>
      {/* todo name input */}
      <input
        type="text"
        placeholder="Todo name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      {/* todo description input */}
      <input
        type="text"
        placeholder="Todo description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      {/* todo deadline input */}
      <input
        type="date"
        name="deadline"
        value={deadline}
        placeholder="Enter todo deadline"
        onChange={handleChange}
      />

      <button onClick={addTodo}>Add task</button>

      <div>
        {todos.map((todo: ITodo, key: number) => {
          return <TodoCard key={key} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
