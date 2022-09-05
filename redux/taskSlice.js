import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log(nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      console.log(action.payload);
      
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(action.payload.id);
      console.log(state);
      return state.filter((item) => item.id === action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;