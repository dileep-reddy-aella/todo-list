import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectTodoList } from '../features/todoSlice';
import { selectUser } from '../features/userSlice';
import Input from './Input';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useSelector(selectTodoList)
  const user = useSelector(selectUser)

  if (!user.loggedIn) {
    return <Navigate to='/login'/>
  }


  return (
    <>
      <div className='flex-1 w-full flex flex-col items-center overflow-y-scroll'>
        { todoList.map(item => {
          return (
            <TodoItem key={item.id} todo={item} />
        )})
        }
      </div>
      <Input />
    </>
  )
}

export default TodoList
