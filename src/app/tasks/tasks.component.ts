import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string | undefined;
  @Input({ required: true }) selectedId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    console.log('Cancel adding task');
    this.isAddingTask = false;
  }
  //how come when i add a new task, the task array stays same lk=ength in my code
}
