import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    toggleTodo: (state, action) => {
      state.todoList.map(todo => {
        if (todo.id === action.payload) {
          todo.done = !todo.done
        }
      })
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
    }
  }
});

export const { saveTodo, toggleTodo, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer