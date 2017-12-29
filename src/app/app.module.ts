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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartInsertComponent,
    NotFoundComponentComponent,
    FuncTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'user',component: UserComponent},
      {path: 'test',component: TestComponent},
      {path:'depart',component : DepartComponent},
      {path:'',component : WelcomeComponent},
      {path:'functest',component:FuncTestComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
