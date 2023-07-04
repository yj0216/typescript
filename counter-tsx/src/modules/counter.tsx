import { createAction, handleActions } from 'redux-actions';



const initialState = {
    number: 0
}
export const increase = createAction();
export const decrease = createAction(DECREASE);

const counter = handleActions(
    {
        [INCREASE]: (state:number, useActions:Action) => ({ number: state.number + 1 }),
        [DECREASE]: (state:number, action:Action) => ({ number: state.number - 1 }),
    },
    initialState,
)

export default counter;