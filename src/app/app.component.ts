import { Component } from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user:User;
  constructor(){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));
  }
  addUser():void{
  }
  test() : void{
  }
}
