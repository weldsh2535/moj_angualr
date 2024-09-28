import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url='http://127.0.0.1:8000/api/login';
  
  constructor(private http: HttpClient) { }
  
  login(loginInfo: Login):Observable<any>{
    // let userInfo={
    //   username:loginInfo.username,
    //   password:loginInfo.password,
      
      
    // }
    return this.http.post(this._url,loginInfo)
    //return this.http.post<any>(`${this._url}/login`,loginInfo)
 }
 getInfoTest(){
   return this.http.get<{username: String, password: String, role: String}[]> ('http://127.0.0.1:8000/api/LoginInfo/login');
 }
 isLoggedin():boolean{
   return localStorage.getItem('token') != undefined;
 }
 logout(){
   localStorage.removeItem('token')
 }


}
