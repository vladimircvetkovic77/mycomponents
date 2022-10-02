import {
      FetchTodosAction,
      DeleteTodosAction,
      LoadingTodosAction,
} from '../actions';

export enum ActionTypes {
     FETCH_TODOS,
     DELETE_TODO,
     LOADING_TODOS,
}

export type Action = FetchTodosAction | DeleteTodosAction | LoadingTodosAction;
