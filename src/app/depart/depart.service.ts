import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Depart} from './depart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartService {
  url : string = "http://localhost:3000/";
  diList : Array<Depart> = [];
  private headers = new Headers();
  constructor(protected _http:Http) { 
    this.headers.append('Content-Type',"application/json;charset=utf-8");
    this.headers.append('Accept',"application/json;charset=utf-8");
  }

  addDepart(di:Depart):Observable<any>{
    let url:string = "api/depart?name=test&diName=ditest";
    return this._http.get(this.url + url);
  }
  getDepartList():Array<Depart>{
    return this.diList;
  }
}
