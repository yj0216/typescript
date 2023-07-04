import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from '../modules/counter';
import Counter from '../component/Counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
    />;
}

export default CounterContainer;