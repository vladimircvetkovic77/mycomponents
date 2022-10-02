import { Loading, ActionTypes } from '../actions';
import { Action } from '../actions';


const initialLoadingState: Loading = {
      loadingTodos: false,
}

export const loadingReducer = (
      state: Loading = initialLoadingState,
      action: Action
) => {
      switch (action.type) {
            case ActionTypes.LOADING_TODOS:
                  return {
                        ...state,
                        loadingTodos: action.payload
                  };
            default:
                  return state
            }
      }
