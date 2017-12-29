import { Component, OnInit } from '@angular/core';
import {Depart} from './depart';
import {DepartService} from './depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'],
  providers:[DepartService]
})
export class DepartComponent implements OnInit {
  di : Depart;
  title : string = "부서정보";
  isShow : boolean = false;
  btnStr : string = "보기";
  diList : Array<Depart> = [];
  visible : boolean = false;
  subTitle : string = this.title + "수정";
  
  constructor(private dis:DepartService) { 
    this.di = new Depart();
  }
  ngOnInit() {
  }
  toggleDepartInsert(v:boolean){
    this.visible = v;
  }

  addDepart(di:Depart):void{
    this.dis.addDepart(di).subscribe(
      datas => {
        let result = datas.json();
        this.di = result.di;
      }
    );
  }
  showDepartList():void{
    this.diList = this.dis.getDepartList();
    console.log(this.diList);
  }
  deleteDi(idx){
    this.diList.splice(idx,1);
  }
  changeShow():void{
    this.isShow = !this.isShow;
    this.btnStr = "보기";
    if(this.isShow){
      this.btnStr = "안보기";
    }
  }
}
