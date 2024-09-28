import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../Service/fetch-data.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { SolutionModel } from '../Service/solution-page';
import { Solution, SolutionSubService } from '../Service/solution-sub.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {
  reportDetail: any;
  solutionModel! : SolutionModel;
  form!: FormGroup;
  userId!: string;
  repId!: string;
  submitted!: boolean;
  getSollYa!: any;
  id: any;
  getAllSolution!: Observable<Solution>;
  constructor(private solutionSubService: SolutionSubService ,private fb : FormBuilder,private fetchDataService: FetchDataService, private route: Router, private solutionService: SolutionSubService ) {
    this.form = this.fb.group(
      {
        checkArray: this.fb.array([], [Validators.required]),
        
      }
    );
  
   }
   public get checkArray(): AbstractControl {
    return this.form.get('checkArray')!;
  }
  ngOnInit(): void {
    this.reportDetail = history.state;
    this.userId = this.reportDetail.UserId;
    this.repId = this.reportDetail.reportId;
    this.solutionModel = new SolutionModel(
      this.userId,this.repId,'','','','','','','','',''
    )
    
    this.getSollYa = this.fetchDataService.getSolutionForProblem(this.repId);
    this.getAllSolution = this.solutionSubService.getAllSolution(this.reportDetail.reportId);
   
 //  this.id=this.fetchDataService.getSolutionForProblem(this.repId)[0].solutionId;
   
   
  }
  getComm = this.fetchDataService.geReportUser();
  //getSoll = this.fetchDataService.getSolutionForProblem()
  onSolutionSubmit(){
    this.submitted = true
    this.solutionModel ={...this.solutionModel,isProblemFixed:this.checkArray.value.toString()}
    this.solutionService.resolveProblem(this.solutionModel)
    . subscribe
    (
      data => alert("Thank You!! Your Solution sent Sucessfully "),
      error => console.error("Error!", error)

    )
  }
  isProblemFixed = [
    { id: 1, name: 'አዎ', isSelected: false },
    { id: 2, name: 'በከፊል', isSelected: false },
    { id: 3, name: 'አልተጠገነም', isSelected: false },
  

  ]
  onChangeItem(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }

  }

  
  

}
