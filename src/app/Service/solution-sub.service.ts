import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTechInfo } from './addTech';
import { AddUserInfo } from './addUser';
import { SolutionModel } from './solution-page';

export interface Solution { reportId: Number, UserId: Number, startDate: String, endDate: String, reasonProblemNotFixed: String, model: String, sole: String, happenedProblem: String, brand: String, isProblemFixed: String, solutionId: Number,itTechName: String }
export interface RatingValue {solutionId: Number, rating: String}


@Injectable({
  providedIn: 'root'
})
export class SolutionSubService {
  _url = 'http://127.0.0.1:8000/api/solution';
  _userInfo = 'http://127.0.0.1:8000/api/LoginInfo';
  _sol_url = 'http://127.0.0.1:8000/api/solution';
  _rating = 'http://127.0.0.1:8000/api';

  constructor(private _http: HttpClient) { }

  resolveProblem(solution: SolutionModel) {
    return this._http.post(<any>this._url, solution);
  }
  addUserInfo(userInfo: AddUserInfo) {
    return this._http.post(<any>this._userInfo, userInfo)
  }
  addTechInfo(techInfo: AddTechInfo) {
    return this._http.post(<any>this._userInfo, techInfo);
  }
  getAllSolution(reportId: Number) : Observable<any> {
    return this._http.get<Solution[]>(`${this._sol_url}/${reportId}`);
  }
  getRating(reportId: Number): Observable<any>{
    return this._http.get<RatingValue[]>(`${this._rating}/UserRating/${reportId}`)
  }
}
