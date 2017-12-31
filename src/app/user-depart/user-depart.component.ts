import { Component, OnInit } from '@angular/core';
import {UserDepartService} from './user-depart.service';
import {DepartService} from '../depart/depart.service';
import {UserDepart} from './user-depart';
import {Depart} from '../depart/depart';
@Component({
  selector: 'app-user-depart',
  templateUrl: './user-depart.component.html',
  styleUrls: ['./user-depart.component.css'],
  providers:[UserDepartService,DepartService]
})
export class UserDepartComponent implements OnInit {
  udList:Array<UserDepart> = [];
  diList:Array<Depart> = [];
  constructor(private uds:UserDepartService,
  private ds:DepartService) { }

  ngOnInit() {
    this.ds.getDepartList("").subscribe(
      res=>{
        this.diList = res.json();
      }
    )
  }
  searchUDList():void{
    this.uds.getUserDepartList().subscribe(
      res=>{
        let result = res.json();
        this.udList = result["list"];
      }
    )
  }
}
