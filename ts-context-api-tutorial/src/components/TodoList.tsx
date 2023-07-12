import { useTodoState } from "../contexts/TodosContext";
import TodoItem from "./TodoItem";

function TodoList() {
    // const todos = [
    //     {
    //         id:1,
    //         text: 'Context API 배우기',
    //         done: true
    //     },
    //     {
    //         id:2,
    //         text: 'TypeScript 배우기',
    //         done: true
    //     },
    //     {
    //         id:3,
    //         text: 'TypeScript 와 Context API 함께 사용하기',
    //         done:false
    //     }
    // ];

    const todos = useTodoState();

    return(
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </ul>
    )
}

export default TodoList;