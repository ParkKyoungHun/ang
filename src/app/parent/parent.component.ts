import { Component, OnInit,DoCheck,AfterViewInit,SimpleChange,
  AfterViewChecked,OnDestroy,OnChanges,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: '../lifecycle-test/lifecycle-test.component.html',
  styleUrls: ['../lifecycle-test/lifecycle-test.component.css']
})
export class LifecycleTestComponent implements OnInit,OnDestroy,OnChanges {
  @Input()title:string;
  @Output() childeVisible = new EventEmitter<boolean>();
  
  seq:number = 1;
  constructor() { 
    console.log("자식 클래스 초기화" + this.seq++);
  }

  ngOnInit() {
    console.log("자식 컴포넌트 초기화" + this.seq++);
  }
  ngOnDestroy(){
    console.log("자식 컴포넌트 종료" + this.seq++);
  }
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log("값이 바뀔때 " + this.seq++);
    for (let pName in changes) {
      let chng = changes[pName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${pName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  viChange(b:boolean):void{
    this.childeVisible.emit(b);
  }
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,DoCheck,AfterViewInit {
  visible : boolean;
  title : string = "컴포넌트 테스트"
  subTitle : string = "자식컴포넌트";
  constructor() {
    console.log("ParentComponent 초기시 실행")
   }

  ngOnInit() {
    this.visible = false;
    console.log("부모 컴포넌트 초기시 실행");
  }
  ngOnDestroy(){
    console.log("부모 컴포넌트 종료");
  }
  chVisible(b:boolean){
    this.visible = b;
  }
  ngDoCheck(){
    console.log("부모 visible값 : " + this.visible);
  }

  ngAfterViewInit() {
    //console.log('부모 한번 실행');
  }
  ngAfterViewChecked(){
    //console.log('부모 값 변화시 매번 실행')
  }
}
