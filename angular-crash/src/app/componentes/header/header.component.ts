import { Component, OnInit } from '@angular/core';
import {UIService} from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTask:boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UIService, private router:Router) {
    this.subscription = uiService
        .onToggle()
        .subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toogleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }
}
