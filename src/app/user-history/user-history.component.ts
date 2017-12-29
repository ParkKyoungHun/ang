import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
})
export class UserHistoryComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    alert(this.visible);
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
