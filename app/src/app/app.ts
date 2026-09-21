import { Component } from '@angular/core';
import { TaskList } from './features/tasks/components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
