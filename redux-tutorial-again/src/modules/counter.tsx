
const initialState = {
    number: 0
}

type Action = 
| {type:'counter/INCREASE',number:number}
| {type:'counter/DECREASE',number:number}

function counter(state = initialState, action:Action) {
    switch (action.type) {
        case 'counter/INCREASE':
            return {
                number: state.number + 1
            };
        case 'counter/DECREASE':
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;