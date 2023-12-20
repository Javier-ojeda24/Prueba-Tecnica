import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: string[];
}

const initialState: TaskState = {
  tasks: [
    "Create a new project",
    "Create a new project",
    "Create a new project",
    "Create a new project",
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks = [...state.tasks, action.payload];

    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
