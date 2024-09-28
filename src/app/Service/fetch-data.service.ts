import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface UserInfo {UserId: String,firstName: String, lastName: String, role: String, username: String}

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
 _sol_for = 'http://127.0.0.1:8000/api/solution';
 _login = 'http://127.0.0.1:8000/api/LoginInfo';

  constructor(private _http: HttpClient) { }

  geReportUser(){
   return this._http.get<{UserId:String,id:String,fullName: String, itemType: String, systemType: String, reportedProblem: String, mesik: String,disability:String,direcrotName: String,bureaueNo: String, medibName: String, sex: String, dateS: String,username: String}[]> ('http://127.0.0.1:8000/api/ReportInfos');
  }
  getSolutionForProblem(reportId: any){
       return this._http.get<{solutionId:String,brand: String, model: String,sole: String,reasonProblemNotFixed: String,endDate: String,isProblemFixed: String,happenedProblem: String}[]>(`${this._sol_for}/${reportId}/solution/`);
  }

  getUsersInfo(){
    return this._http.get<UserInfo[]>("http://127.0.0.1:8000/api/LoginInfo")
  }
  deleteUser(UserId: String){
    return this._http.delete(`${this._login}/${UserId}`)
  }

  
}
