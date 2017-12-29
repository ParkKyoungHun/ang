import { Component, OnInit,ElementRef,Renderer2,ViewChild,QueryList,ViewChildren } from '@angular/core';
import {UserDataService} from './user-data.service';
import {User} from './user';
import {UserHis} from './user-his';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserDataService],
})

export class UserComponent implements OnInit {
  userList:Array<User>=[];
  searchUser:User = new User();
  errorMsg:string = '';
  addUserObj:User = new User();

  addUserShow:boolean = false;
  addUserBtnStr:string='Show Add User Div';
  title:string = 'User List';
  showDialog:boolean = false;
  userHisList:Array<UserHis>=[];

  constructor(private uds: UserDataService) { 
  }
  ngAfterViewInit() {
  }

  ngOnInit() {
  }
  addUser():void{
    console.log(this.addUserObj);
    this.userList.push(this.addUserObj);
  }
  getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error =>  {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }
  // showUserHis(userNo:number){
  //   this.showDialog = true;

  //   this.uds.getUsersHis(userNo).subscribe(
  //     datas => {
  //       console.log(datas);
  //       if(datas['error']){
  //         alert(datas['error']);
  //         return;
  //       }
  //       this.userHisList = datas["list"];        
  //     },
  //     error =>  {
  //       this.errorMsg = <any>error;
  //       alert(this.errorMsg);
  //     });
  // }
  // addUser(user:User):void{
  //   console.log(user);
  //   this.uds.addUser(user).subscribe(
  //     datas => {
  //       console.log(datas);
  //       if(datas["error"]){
  //         alert(datas["error"]);
  //         return;
  //       }
  //       if(datas["msg"]){
  //         alert(datas["msg"]);
  //       }
  //       this.userList = datas["list"];
  //     },
  //     error =>  {
  //       this.errorMsg = <any>error;
  //       alert(this.errorMsg);
  //     });
  // }
  
  // getUsers2():void{
  //   this.uds.getUsers(this.searchUser,'2').subscribe(
  //     datas => {
  //       console.log(datas);
  //       this.userList = datas["list"];
  //     },
  //     error =>  {
  //       this.errorMsg = <any>error;
  //       alert(this.errorMsg);
  //     });
  // }
  // showHideAddUserDiv():void{
  //   this.addUserBtnStr='Show Add User Div';
  //   this.addUserShow = !this.addUserShow;
  //   if(this.addUserShow)
  //   this.addUserBtnStr='Hide Add User Div';
  // }
}
