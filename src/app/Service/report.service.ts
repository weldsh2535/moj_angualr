import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report';
import { RatingModelLa } from './rating';
import { Observable } from 'rxjs';
export interface AddTech  {UserId:String,reportId:string,fullName: String, itemType: String, systemType: String, reportedProblem: String, mesik: String,disability:String,direcrotName: String,bureaueNo: String, medibName: String, sex: String, dateS: String,username: String}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  _url='http://127.0.0.1:8000/api/ReportInfo';
  _url_ass = 'http://127.0.0.1:8000/api/Report';
  _url_total = 'http://127.0.0.1:8000/api/TotalReport';
  _sol_url = "http://127.0.0.1:8000/api/solution";
  _rating_url = 'http://127.0.0.1:8000/api/UserRating'; //<int: UserId>/reports/"
  _url_for_tech = 'http://127.0.0.1:8000/api/reports';
  constructor(private _http: HttpClient) { }

  Report(reportInfo: Report){
    return this._http.post(<any>this._url, reportInfo);
  }

  getTotalReport() {
    return this._http.get(this._url_total);
 }
 getSolutionForUser(UserId: String){
   
      return this._http.get<{UserId: string, reasonProblemNotFixed: string, happenedProblem: string,sole: string}[]>(`${this._sol_url}/${UserId}/reports/`);
 }

 addUserComment(rating: RatingModelLa){
   return this._http.post(this._rating_url,rating);
 }
 assignITTech(reportinfo: Report, reportId: String){
   return this._http.put(`${this._url_ass}/${reportId}`, reportinfo)
 }
 getRepoForTech(username: String): Observable<any>{
  return this._http.get<AddTech[]>(`${this._url_for_tech}/${username}/reports/`)
 }
}



