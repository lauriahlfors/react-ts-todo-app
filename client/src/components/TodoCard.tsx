import { ITodo } from '../interfaces/todo';

interface Props {
  todo: ITodo;
}

const TodoCard = ({ todo }: Props) => {
  return (
    <div>
      <h1>{todo.name}</h1>
      <p>{todo.description}</p>
      <p>Deadline on {todo.deadline}</p>
    </div>
  );
};

export default TodoCard;
