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
  duVisible : boolean = false;
  subTitle : string = this.title + "추가";
  diNo : string="";
  duDiNo : number = 0;
  
  constructor(private dis:DepartService) { 
    this.di = new Depart();
  }
  ngOnInit() {
  }
  toggleDepartInsert(v:boolean){
    this.visible = v;
  }

  addDepart(di:Depart):void{
    this.dis.addDepartPost(di).subscribe(
      datas => {
        let result = datas.json();
        if(result.succeed=="ok"){
          alert("부서추가가 정상적으로 성공하였습니다.");
          this.showDepartList();
        }else{
          alert("부서추가가 실패하였습니다.");
        }
      }
    );
  }
  duCase(duCase:string):void{
    this.duVisible = false;
    if(duCase=="reload"){
      this.showDepartList();
    }
  }
  showDepartList():void{
    this.dis.getDepartList(this.diNo).subscribe(
      datas=>{
        console.log(datas.json());
        this.diList = datas.json();
      }
    );
  }
  deleteDi(di:Depart){
    this.dis.deleteDepart(di).subscribe(
      res=>{
        var result = res.json();
        if(result.error){
          alert(result.error.msg);
        }else{
          alert("정상적으로 삭제 되었습니다.");
          this.showDepartList();
        }
      }
    );
  }
  changeShow():void{
    this.isShow = !this.isShow;
    this.btnStr = "보기";
    if(this.isShow){
      this.btnStr = "안보기";
    }
  }
  chVisible(v:boolean):void{
    this.duVisible =v;
  }
  openView(di:Depart):void{
    this.duDiNo = di.diNo;
    this.chVisible(true);
  }
}
