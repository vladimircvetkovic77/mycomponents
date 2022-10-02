import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { loadingTodos, LoadingTodosAction } from './loading'
import config from '../config/config.json';

const url = 'https://jsonplaceholder.typicode.com/todos'
export interface Todo {
      id: number;
      title: string;
      completed: boolean;
}
export interface FetchTodosAction {
      type: ActionTypes.FETCH_TODOS;
      payload: Todo[];
}
export interface DeleteTodosAction {
      type: ActionTypes.DELETE_TODO;
      payload: number;
}
export const fetchTodos = () => {
      return async (dispatch: Dispatch) => {
            dispatch<LoadingTodosAction>(loadingTodos(true));
            const response = await axios.get<Todo[]>(url);
            dispatch<FetchTodosAction>({
                  type: ActionTypes.FETCH_TODOS,
                  payload: response.data
            })
            setTimeout(()=>dispatch<LoadingTodosAction>(loadingTodos(false)), config.MINIMUM_LOADING_TIME);
      }
}
export const deleteTodo = (id: number): DeleteTodosAction => {
      return { type: ActionTypes.DELETE_TODO, payload: id}
}
