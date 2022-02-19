import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todoSlice';

const TodoItem = ({todo}) => {
  const { item, done, id } = todo;
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTodo(id))
  }

  const removeTodo = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className='flex justify-between items-center w-4/5'>
      <div className='text-black flex items-center w-11/12  bg-white mx-1 my-1.5 h-10 rounded-xl hover:shadow px-3'>
        <input type='checkbox' className='mr-2 transition-all ease-in-out' checked={done} onChange={handleChange}/>
        <p className={`${done && 'line-through'} flex-1`}>{item}</p>
        
      </div>
      <button onClick={removeTodo} className='outline-none w-5 h-5 flex justify-center align-cente rounded-full text-white bg-red-600 hover:scale-125'>
        <span className='leading-none font-bold'>–</span>
      </button>
    </div>
  )
}

export default TodoItem
