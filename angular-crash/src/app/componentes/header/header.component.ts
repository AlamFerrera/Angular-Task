import { Component, OnInit } from '@angular/core';
import {UIService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTask:boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UIService) {
    this.subscription = uiService
        .onToggle()
        .subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toogleAddTask(){
    this.uiService.toggleAddTask();
  }
}
