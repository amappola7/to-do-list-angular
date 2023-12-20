import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
  });

  @Output() taskSavedNotification: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(
    private taskService: TaskService
  ) {}

  onSubmit(): void {
    this.taskService.createTask(this.taskForm.value)
    .subscribe((result) => {
      this.taskSavedNotification.emit(result);
      this.taskForm.reset();
    });
  }
}
