import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo, Loading } from '../actions'
import { StoreState } from '../reducers'

interface TodosListProps {
      todos: Todo[]
      fetchTodos: Function // when thunk function is used
      deleteTodo: typeof deleteTodo // when regular function is used
      loading: Loading
}
interface TodosListMappedProps {
      todos: Todo[],
      loading: Loading
}

const TodosList : FC<TodosListProps> = ({ todos, fetchTodos, deleteTodo, loading }): JSX.Element => {
      useEffect(() => {
            //
        return () => {
          // clear
        }
      }, [])

      const onButtonClick = (): void => {
            fetchTodos()
      }

  return (
      <div>
            <h1>{loading.loadingTodos ? 'Fetching' : 'Todo List'}</h1>
            <button onClick={onButtonClick}>Fetch</button>
            <ul>
                  { !loading.loadingTodos && todos.map((todo: Todo) => (
                        <li onClick={()=>deleteTodo(todo.id)} key={todo.id}>{todo.title}</li>
                  ))}
            </ul>
      </div>
  )
}
const mapStateToProps = ({ todos, loading }: StoreState): TodosListMappedProps => {
  return { todos, loading }
}
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodosList)
