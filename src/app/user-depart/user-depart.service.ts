import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDepartService {
  url = "http://localhost:3000/";
  constructor(private _http:Http) { }
  getUserDepartList():Observable<any>{
    let url = "api/userdeparts"
    return this._http.get(this.url + url);
  }
}
