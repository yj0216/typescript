import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter"
import { decrease, increase } from '../modules/counter';
import { RootState } from '../modules';

const CounterContainer = () => {
    const number = useSelector((state:RootState) => state.counter.number);
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