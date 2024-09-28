import { Component, OnInit } from '@angular/core';
import { CommentMo } from '../Service/comment';
import { CommentService } from '../Service/comment.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  commentModel=new CommentMo(
    1,
    "",
    "",
    "",
    "",
  
    )
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.commentService.comment(this.commentModel)
       .subscribe(
      data=>alert("Thank You!! you comment sent Sucessfully "),
      error=>console.error("Error!",error)
      )
  
   
     
  }

}
