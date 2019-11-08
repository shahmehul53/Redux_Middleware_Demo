import {COUNTER_INCREASE} from './Types';
import {COUNTER_DECREASE} from './Types';

export const increaseCounter = count => ({
  type: 'INCREASE_COUNTER',
  payload: count,
});

export const decreaseCounter = count => ({
  type: 'DECREASE_COUNTER',
  payload: count,
});
