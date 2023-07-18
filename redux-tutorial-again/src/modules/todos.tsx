 import { produce } from 'immer';
import { ActionType, createReducer, createAction } from 'typesafe-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
let id = 3;
type TodosProps = {
    id: number,
    text: string,
    done: boolean,
}

type TodosState = {
    input: string,
    todos: TodosProps[]
}
const initialState: TodosState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        }
        ,
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
}

export const changeInput = createAction(CHANGE_INPUT, (input: string) => input)();
export const insert = createAction(INSERT, (text: string) => ({
    id: id++,
    text: text,
    done: false
}))();
export const toggle = createAction(TOGGLE, (id:number) => id)();
export const remove = createAction(REMOVE, (id:number) => id)();

const actions = {changeInput,insert,toggle,remove}
type TodosAction = ActionType<typeof actions>

const todos = createReducer<TodosState,TodosAction>(initialState,{
    [CHANGE_INPUT]: (state, { payload: input }) =>
        produce(state, draft => {
            draft.input = input;
        }),
    [INSERT]: (state, { payload: todo }) =>
        produce(state, draft => {
            draft.todos.push(todo);
        }),
    [TOGGLE]: (state, { payload: id }) =>
        produce(state, draft => {
            const todo = draft.todos.find(todo => todo.id === id);
            todo!.done = !todo!.done;
        }),
    [REMOVE]: (state, { payload: id }) =>
        produce(state, draft => {
            const index = draft.todos.findIndex(todo => todo.id === id);
            draft.todos.splice(index, 1);
        })
},
);

export default todos;