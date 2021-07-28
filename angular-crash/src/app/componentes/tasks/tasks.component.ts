import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];

  constructor(private taskService:TaskService) {
    //this.task = [{text: '', day: '', reminder: false }];
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((element) => {
        this.tasks = element;
    });
  }

  deleteTask(lv_task: Task){
    this.taskService.deleteTask(lv_task).subscribe(() => {
      this.tasks = this.tasks.filter(element => element.id !== lv_task.id);
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task)
    .subscribe( (elemento) => this.tasks.push(elemento));
  }

}
