import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {enableProdMode} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { DepartComponent } from './depart/depart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartInsertComponent } from './depart-insert/depart-insert.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FuncTestComponent } from './func-test/func-test.component';
import { PromiseComponent } from './promise/promise.component';
import { DepartUpdateComponent } from './depart-update/depart-update.component';
//import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { ParentComponent,LifecycleTestComponent } from './parent/parent.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { UserDepartComponent } from './user-depart/user-depart.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartInsertComponent,
    NotFoundComponentComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent,
    LifecycleTestComponent,
    ParentComponent,
    NgContentComponent,
    UserDepartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'userdepart',component: UserDepartComponent},
      {path: 'test',component: TestComponent},
      {path:'depart',component : DepartComponent},
      {path:'',component : WelcomeComponent},
      {path:'functest',component:FuncTestComponent},
      {path:'promise',component:PromiseComponent},
      {path:'parent',component:ParentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
