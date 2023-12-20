import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  trashIcon: IconDefinition = faTrash;
  @Input() task!: Task;
  @Output() deletedTask: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private taskService: TaskService
  ) {}

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
    .subscribe(() => {
      this.deletedTask.emit(id);
    })
  }
}
