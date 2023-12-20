import { RawTask, Task } from "src/app/models/task";

export const taskMapper = (rawTask: RawTask): Task => {
  return {
    ...rawTask,
    status: 'pending'
  }
};