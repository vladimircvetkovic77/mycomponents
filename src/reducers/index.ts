import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { loadingReducer } from './loading';
import { Todo, Loading } from '../actions';

export interface StoreState {
      todos: Todo[];
      loading: Loading
}

const reducers = combineReducers<StoreState>({
      // reducers go here
      todos: todosReducer,
      loading: loadingReducer
});
export default reducers;
