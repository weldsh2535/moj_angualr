import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../Service/fetch-data.service';
import {MatSelectModule} from '@angular/material/select';
import { CommentService } from '../Service/comment.service';
import { AddUserInfo } from '../Service/addUser';
import { SolutionSubService } from '../Service/solution-sub.service';
import { AddTechInfo } from '../Service/addTech';
import { ReportService } from '../Service/report.service';
import { Report } from '../Service/report';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormValidationRules } from 'ts-form-validation';
import { isEmpty } from 'rxjs';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  ci: any;
  y!: Number;
  userId!: String;
  repoId!: String;
  display = "none";

  userinfo = new AddUserInfo(
    '','','user','',''
  )
  techInfo = new AddTechInfo(
    '','','tech','',''
  )
  // reportId!: any;

  assignAdd = new Report(
     " .UserId",
     " .mesik",
     " .direcrotName",
     " .medibName",
     " .bureaueNo",
     " .dateS",
       ".fullName",
     " .sex",
      ".disability",
    "  .itemType",
     " .systemType",
   " .reportedProblem",
    '',
    ".id"
      
  );

//   assignAdd = new Report(
//      this.assignITInfo.UserId,
//      this.assignITInfo.mesik,
//      this.assignITInfo.direcrotName,
//      this.assignITInfo.medibName,
//      this.assignITInfo.bureaueNo,
//      this.assignITInfo.dateS,
//       this.assignITInfo.fullName,
//      this.assignITInfo.sex,
//      this.assignITInfo.disability,
//      this.assignITInfo.itemType,
//      this.assignITInfo.systemType,
//    this.assignITInfo.reportedProblem
//      ,
//      'It Assigned'
//  )
 

  constructor(private formBuilder: FormBuilder,private fetchDataService : FetchDataService, public commentService: CommentService, private solutionSubService: SolutionSubService, private reportService: ReportService) { 
    
  }

  ngOnInit(): void {
    
    
    this.getComm.forEach(element => {
        for (let index = 0; index < element.length; index++) {
           this.y = element[index].commentId;
           
          
        }
     
     
      return  element;
      
   });
   this.getUsers.forEach(element => {
    for (let index = 0; index < element.length; index++) {
       this.userId = element[index].UserId;

     
      
      
    }
 
 
  return  element;
  
});


this.getRepo.forEach(element => {
  for (let index = 0; index < element.length; index++) {
     //this.userId = element[index].UserId
     this.repoId = element[index].id;
    console.log(element)
     this.assignAdd.UserId = element[index].UserId.toString();
     this.assignAdd.mesik = element[index].direcrotName.toString();
     this.assignAdd.medibName = element[index].medibName.toString();
     this.assignAdd.fullName = element[index].fullName.toString();
     this.assignAdd.itemType = element[index].itemType.toString();
     this.assignAdd.systemType = element[index].systemType.toString();
     this.assignAdd.bureaueNo = element[index].bureaueNo.toString();
     this.assignAdd.sex = element[index].sex.toString();
     this.assignAdd.reportedProblem = element[index].reportedProblem.toString()
     this.assignAdd.dateS = element[index].dateS.toString()
     this.assignAdd.disability = element[index].disability.toString()
     
    
    
    
  }


return  element;

});


  
  }
  
 
  getRepo = this.fetchDataService.geReportUser();
  getComm = this.commentService.getComment();
  getUsers = this.fetchDataService.getUsersInfo();
 
  
  onSubmitUserInfo(){
    if(this.userinfo.username !== '' && this.userinfo.username.endsWith('@aau.edu.et')){
      this.solutionSubService.addUserInfo(this.userinfo)
      .subscribe(
        data => alert("Thank You!! New User Added!! "),
        error => console.error("Error!", error)
      ) 
    } else{
      alert('username or/ password can not empty')
    }
   
  }
   
 onSubmitTechInfo(){
   this.solutionSubService.addTechInfo(this.techInfo)
   .subscribe(
    data => alert("Thank You!! New IT Techinician Added!! "),
    error => console.error("Error!", error)
  )
 }
 deleteComment(){
   console.warn('lllll' + this.y);
   this.commentService.deleteComment(this.y)
   .subscribe(
    data => alert("Thank You!! Comment Deleted Successfully!! "),
    error => console.error("Error!", error)
   
  )

 }
 deleteUser(){
   console.warn('usr is ', this.userId);
   this.fetchDataService.deleteUser(this.userId)
   .subscribe(
    data => alert("Thank You!! User Deleted Successfully!! "),
    error => console.error("Error!", error)
   
  )
 }

 assignITTech(){
   console.warn('rrrrr is ',this.repoId);
   this.reportService.assignITTech(this.assignAdd, this.repoId)
   .subscribe(
    data => alert("Thank You!! IT Techinican Assigned Successfully!! "),
    error => console.error("Error!", error)
   
  )
   
 }
  
  
  
  

}
