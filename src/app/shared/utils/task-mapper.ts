import { RawTask, FormTask } from "src/app/models/task";

export const taskMapper = (rawTask: RawTask): FormTask => {
  return {
    ...rawTask,
    status: 'pending'
  }
};