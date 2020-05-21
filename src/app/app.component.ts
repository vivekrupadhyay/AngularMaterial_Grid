import { Component } from '@angular/core';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';
  isDisplay=false;
  constructor(private router:Router,private userService:UserService){}
  getData() {
    this.isDisplay=true;
    this.router.navigate(['/users']);
    //this.userService.getUsers();
  }

}
