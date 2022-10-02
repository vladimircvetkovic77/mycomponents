import { ActionTypes } from './types';

export interface Loading {
      loadingTodos: boolean;
}
export interface LoadingTodosAction {
      type: ActionTypes.LOADING_TODOS;
      payload: boolean;
}

export const loadingTodos = (loadingStatus: boolean): LoadingTodosAction => {
      return { type: ActionTypes.LOADING_TODOS, payload: loadingStatus }
}
