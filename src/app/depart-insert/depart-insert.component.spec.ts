import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartInsertComponent } from './depart-insert.component';

describe('DepartInsertComponent', () => {
  let component: DepartInsertComponent;
  let fixture: ComponentFixture<DepartInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
