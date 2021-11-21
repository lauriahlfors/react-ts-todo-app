// import from react
import { ChangeEvent, FC, useState } from 'react';
// import components
import Input from '../components/Input';

const Todo: FC = () => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === 'todo'
      ? setTodo(event.target.name)
      : console.log('Yeet');
  };

  return (
    <div className="view view-todo">
      <h1>Todo</h1>
      <Input name="Todo" type="text" value={todo} onChange={handleChange} />
      <Input name="Deadline" type="number" />
    </div>
  );
};

export default Todo;
