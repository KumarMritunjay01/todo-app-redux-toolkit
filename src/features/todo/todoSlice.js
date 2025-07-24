import { createSlice } from "@reduxjs/toolkit";

// Step 1: Create two helper functions
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Load error : ", error);
    return [];
  }
};

const saveTodoLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Save error : ", error);
  }
};

// 2. Update your initial state
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: loadFromLocalStorage(),
  },
  // Step 3: Save to localStorage when todos change
  // Update your reducers like this:
  reducers: {
    addtodo: (state, action) => {
      state.value.push(action.payload);
      saveTodoLocalStorage(state.value);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
      saveTodoLocalStorage(state.value);
    },
    toggleCompleted: (state, action) => {
      const todo = state.value.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodoLocalStorage(state.value);
      }
    },
  },
});

export const { addtodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
