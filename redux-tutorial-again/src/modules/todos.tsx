import React, { Dispatch, createContext, useContext, useReducer } from "react";

export type Action =
    | { type: 'todos/CHANGE_INPUT'; input: string }
    | { type: 'todos/INSERT'; todo: { id: number, text: string, done: boolean } }
    | { type: 'todos/TOGGLE'; id: number }
    | { type: 'todos/REMOVE'; id: number };

const CHANGE_INPUT = 'todos/CHANGE_INPUT' as const;
const INSERT = 'todos/INSERT' as const;
const TOGGLE = 'todos/TOGGLE' as const;
const REMOVE = 'todos/REMOVE' as const;

export const changeInput = () => ({ type: CHANGE_INPUT });
export const insert = () => ({ type: INSERT });
export const toggle = () => ({ type: TOGGLE });
export const remove = () => ({ type: REMOVE });

export type TodosState = {
    input: string;
    todos: {
        id: number;
        text: string;
        done: boolean;
    }

}

const initialState: TodosState = {
    input: '',
    todos: {
        id: 1,
        text: 'Context API 배우기',
        done: true
    }
};
const TodosStateContext = createContext<TodosState | undefined>(undefined)

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined)

export function todosReducer(state: TodosState = initialState, action: Action) {
    switch (action.type) {
        case 'todos/CHANGE_INPUT':
            return {
                ...state,
                input: action.input
            };
        case 'todos/INSERT':
            return {
                ...state,
                todos: {
                    id: action.todo.id,
                    text: action.todo.text,
                    done: false
                }
            }
        case 'todos/TOGGLE':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo)
            }
        case 'todos/REMOVE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
    }
}


export function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            input: '',
            id: 1,
            text: 'Context API 배우기',
            done: true
        },
        {
            input: '',
            id: 2,
            text: 'TypeScript 배우기',
            done: true
        },
        {
            input: '',
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

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}
