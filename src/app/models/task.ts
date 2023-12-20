export interface RawTask {
  title: string,
  description: string,
  priority: string
};
export interface FormTask extends RawTask {
  status: string
};

export interface Task extends FormTask {
  id: number
}