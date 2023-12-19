import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor(
    private taskService: TaskService
  ) {}

  onSubmit(): void {
    this.taskService.createTask(this.taskForm.value)
    .subscribe((result) => console.log(result));
  }
}
