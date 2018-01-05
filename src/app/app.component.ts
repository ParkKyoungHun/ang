import { Component } from '@angular/core';
import {User} from './user/user';
import {RouterLink} from './router-link';
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rlList :Array<RouterLink> = [];
  user:User;
  constructor(private _http:Http){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));
    
    let url = "http://localhost:3000/api/menu";
    this._http.get(url).subscribe(res=>{
      console.log(res.json());
      this.rlList = res.json()["list"];
    });
  }
  addUser():void{
  }
  test() : void{
  }
}
