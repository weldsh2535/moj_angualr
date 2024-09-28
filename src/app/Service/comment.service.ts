import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentMo } from './comment';
export interface commentArray {commentId: Number,firstName: String, lastName: String, subject : String, message: String}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _url='http://127.0.0.1:8000/api/Comment';
  constructor(private _http: HttpClient) { }
  comment(comment: CommentMo){
    return this._http.post(<any>this._url, comment)
  }
  getComment(){
    return this._http.get<commentArray[]> ('http://127.0.0.1:8000/api/Comment');
}
deleteComment(commentId: Number){
      return this._http.delete(`${this._url}/${commentId}`)
}
}
