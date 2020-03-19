import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  incrementRequested,
  decrementRequested,
} from '../../modules/counter/actions';


const Counter = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementRequested());
  const decrement = () => dispatch(decrementRequested());
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Count:
        {count}
      </p>

      <p>
        <Button color="primary" onClick={increment}>Increment</Button>
      </p>

      <p>
        <Button color="primary" onClick={decrement}>Decrement</Button>
      </p>

      <p>
        <Button color="primary" onClick={() => dispatch(push('/about-us'))}>
          Go to about page via redux
        </Button>
      </p>
    </div>
  );
};

export default Counter;
