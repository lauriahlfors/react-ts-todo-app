import { ITodo } from '../interfaces/todo';

interface Props {
  todo: ITodo;
}

const TodoCard = ({ todo }: Props) => {
  return (
    <div>
      <h1>{todo.todoName}</h1>
      <p>{todo.todoDescription}</p>
      <p>Deadline on {todo.todoDeadline}</p>
    </div>
  );
};

export default TodoCard;
