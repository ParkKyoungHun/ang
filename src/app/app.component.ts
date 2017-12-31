import { Component } from '@angular/core';
import {User} from './user/user';
import {RouterLink} from './router-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rlList :Array<RouterLink> = [];
  user:User;
  constructor(){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));
    /*
    <li><a [routerLink]="['/userdepart']">User List</a></li>
    <li><a [routerLink]="['/test']">Test Component</a></li>
    <li><a [routerLink]="['/depart']">Depart List</a></li>
    <li><a [routerLink]="['/functest']">Func Test</a></li>
    <li><a [routerLink]="['/promise']">Promise Test</a></li>
    <li><a [routerLink]="['/parent']">Parent Test</a></li>
    */
    let rl:RouterLink = new RouterLink({url:'/userdepart',text:'User List'});
    this.rlList.push(rl);
    rl = new RouterLink({url:'/test',text:'Test Component'});
    this.rlList.push(rl);
    rl = new RouterLink({url:'/depart',text:'Depart List'});
    this.rlList.push(rl);
    rl = new RouterLink({url:'/functest',text:'Func Test'});
    this.rlList.push(rl);
    rl = new RouterLink({url:'/promise',text:'promise Test'});
    this.rlList.push(rl);
    rl = new RouterLink({url:'/parent',text:'parent Test'});
    this.rlList.push(rl);

  }
  addUser():void{
  }
  test() : void{
  }
}
