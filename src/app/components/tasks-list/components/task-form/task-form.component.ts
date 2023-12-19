import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  onSubmit(): void {
    console.log(this.taskForm.value);
  }
}
