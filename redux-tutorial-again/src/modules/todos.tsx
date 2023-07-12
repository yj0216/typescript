import React, { Dispatch, createContext, useContext, useReducer } from "react";

export type Action =
| { type: 'todos/CHANGE_INPUT'; input: string }
| { type: 'todos/INSERT'; todo: {id: number,text:string,done:boolean}}
| { type: 'todos/TOGGLE'; id: number }
| { type: 'todos/REMOVE'; id: number };

let id = 3;
export type InitialState = {
    input: string,
    todos: [
        {
            id: number,
            text: string,
            done: boolean
        }
    ]
}

type TodosState = InitialState;
const TodosStateContext = createContext<TodosState | undefined>(undefined)
type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined)

function todosReducer(state : TodosState, action:Action):TodosState {
    switch (action.type) {
        case 'todos/CHANGE_INPUT':
            return {
                ...state,
                input: action.input
            };
        case 'todos/INSERT':
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case 'todos/TOGGLE':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo,done:!todo.done} : todo)
            }
        case 'todos/REMOVE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}


export function TodosContextProvider({ children }: { children: React.ReactNode}) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true
        },
        {
            id: 2,
            text: 'TypeScript 배우기',
            done: true
        },
        {
            id: 3,
            text: 'TypeScript 와 Context API 함께 사용하기',
            done: false
        }
    ])

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

export function useTodoState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found')
    return state;
}

export function useTodosDispatch(){
    const dispatch = useContext(TodosDispatchContext);
    if(!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}

export default todos;