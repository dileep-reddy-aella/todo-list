import React from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {

  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch(saveTodo({item: input, done: false, id: Date.now()}))
    setInput('')
  }

  return (
    <div className='flex items-center h-12 w-4/5 bg-white rounded-xl justify-center shadow'>
      <input placeholder="What's on your mind?..." type='text' className='bg-none border-none ml-3 flex-auto focus:outline-none' 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        onKeyDown={e => e.key === 'Enter' ? addTodo() : null}
      />
      <button 
        className='mr-2 border-none text-white rounded-lg h-7 w-12 text-sm bg-gray-800 hover:text-slate-800 hover:border hover:border-solid hover:border-gray-800 hover:bg-white'
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  )
}

export default Input
