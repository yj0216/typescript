import { ActionType, createAction, createReducer } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE, (num:number)=> num)();
export const decrease = createAction(DECREASE, (num:number)=> num)();

type CounterState = {
    count: number;
}
const initialState: CounterState = {
    count: 0,
}

const actions = {increase,decrease}

type CounterAction = ActionType<typeof actions>
const counter = createReducer<CounterState, CounterAction>(initialState,
    {
        [INCREASE]: (state, action) => ({ count: state.count + action.payload }),
        [DECREASE]: (state, action) => ({ count: state.count - action.payload }),
    },)

export default counter;