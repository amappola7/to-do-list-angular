export interface RawTask {
  title: string,
  description: string,
  priority: string
};
export interface Task extends RawTask {
  status: string
};
