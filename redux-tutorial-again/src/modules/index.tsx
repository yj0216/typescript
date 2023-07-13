import { combineReducers } from 'redux';
import counter from './counter';
import { todosReducer } from './todos';



const rootReducer = combineReducers({
    counter,
    todosReducer:todosReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;