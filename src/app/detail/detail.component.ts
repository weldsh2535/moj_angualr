import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchDataService } from '../Service/fetch-data.service';
import { RatingModelLa } from '../Service/rating';
import { Report } from '../Service/report';
import { ReportService } from '../Service/report.service';
import { Solution, SolutionSubService } from '../Service/solution-sub.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  reportDetail: any;
  getAllSolution!: Observable<Solution>;
  userRating!: any;
  userI! : Number;
  s: any;
  repoId!: String;
  assignAdd = new Report(
    "",
    " ",
    "",
    "",
    "",
    " ",
    "",
      "",
    "",
     "",
   "",
    "",
  ""
     ,
     ''
 )
  constructor(private solutionSubService: SolutionSubService, private reportService: ReportService,private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.reportDetail = history.state
    console.log(this.reportDetail)
    this.getAllSolution = this.solutionSubService.getAllSolution(this.reportDetail.reportId);
    this.userRating = this.solutionSubService.getRating(this.reportDetail.reportId);
    this.repoId = this.reportDetail.reportId;
    this.assignAdd.UserId =this.reportDetail.UserId
    this.assignAdd.mesik =this.reportDetail.mesik
    this.assignAdd.medibName =this.reportDetail.medibName
    this.assignAdd.fullName =this.reportDetail.fullName
    this.assignAdd.itemType =this.reportDetail.itemType
    this.assignAdd.systemType =this.reportDetail.systemType
    this.assignAdd.bureaueNo =this.reportDetail.bureaueNo
    this.assignAdd.sex =this.reportDetail.sex
    this.assignAdd.reportedProblem =this.reportDetail.reportedProblem
    this.assignAdd.dateS =this.reportDetail.dateS
    this.assignAdd.disability =this.reportDetail.disability
  
   
  }
  getUsers = this.fetchDataService.getUsersInfo()
  
  assignITTech(){
   
    this.reportService.assignITTech(this.assignAdd, this.repoId)
    .subscribe(
     data => alert("Thank You!! IT Techinican Assigned Successfully!! "),
     error => console.error("Error!", error)
    // 
   )
    }
  // this means there is something happen in second time that is devoted to it and allow them to tes
}
// this means there is somethung happein in second time 