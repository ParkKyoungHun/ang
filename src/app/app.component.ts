import { Component } from '@angular/core';
import {User} from './user/user';
import {RouterLink} from './router-link';
import { Http} from '@angular/http';
import {CommonServiceService} from './common/common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rlList :Array<RouterLink> = [];
  user:User;
  constructor(private css:CommonServiceService){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));
    
    let url = "http://localhost:3000/api/menus";
    this.css.getJSON(url).subscribe(
      res=>{
        this.rlList = res.list;
        console.log(this.rlList);
      }
    );
  }
  addUser():void{
  }
  test() : void{
  }
}
