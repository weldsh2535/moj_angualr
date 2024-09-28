import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchDataService } from '../Service/fetch-data.service';
import { Report } from '../Service/report';
import { ReportService } from '../Service/report.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  username!: string;
  getRepoForTech! : Observable<any>;
  constructor(private fetchDataService : FetchDataService, private route: Router, private reportService: ReportService) { }

  ngOnInit(): void {
   this.route.getCurrentNavigation()?.extras.state;
  this.username = localStorage.getItem('username')!;
  this.getRepoForTech = this.reportService.getRepoForTech(this.username);
  }
  getRepo = this.fetchDataService.geReportUser();
  
   


}


