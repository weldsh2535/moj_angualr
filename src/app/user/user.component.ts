import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { RatingModelLa } from '../Service/rating';
import { Report } from '../Service/report';
import { ReportService } from '../Service/report.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  reportModel!: Report;
  userId!: string;
  reportId!: string;
  form!: FormGroup;
  formSystem!: FormGroup;
  getSolution!: Observable<any[]>;
  ratingMo = new RatingModelLa(
    '',''
  );

  constructor(private fb: FormBuilder, private reportService: ReportService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.form = this.fb.group(
      {
        checkArray: this.fb.array([], [Validators.required]),
        systemArray: this.fb.array([], [Validators.required]),
        ratingArray: this.fb.array([], [Validators.required]),
        disabilityArray: this.fb.array([], [Validators.required]),
      }
    );

  }



  public get checkArray(): AbstractControl {
    return this.form.get('checkArray')!;
  }
  public get systemArray(): AbstractControl{
    return this.form.get('systemArray')!;
  }
  public get ratingArray(): AbstractControl{
    return this.form.get('ratingArray')!;
  }
  public get disabilityArray(): AbstractControl{
    return this.form.get('disabilityArray')!;
  }



  ngOnInit(): void {
    this.route.getCurrentNavigation()?.extras.state;
    
   let myString = this.checkArray.get.toString;
    this.userId = localStorage.getItem("UserId")!;
     this.reportService.getTotalReport().subscribe(res =>
     {
       console.log(res.toString())
      this.reportId = res.toString()
     }
    );
    
     this.reportModel = new Report(
    this.userId, '', '', '', '', '', '', '', '', '', '', '','',this.reportId);
    this.getSolution = this.reportService.getSolutionForUser(this.userId);
    
    
  }

  
  onReport() {
  //  console.log(this.form.getRawValue());
  //  this.reportModel = new Report(
  //   this.userId, '', '', '', '', '', '', '', '', '', '', '');
  // //let myString = this.form.getRawValue().toString();
  this.reportModel={...this.reportModel,itemType:this.checkArray.value.toString(), systemType:this.systemArray.value.toString(), disability: this.disabilityArray.value.toString()}
  //this.reportModel={...this.reportModel, systemType:this.systemArray.value.toString()}
 
  
    console.log(this.reportModel);
    this.reportService.Report(this.reportModel)
      .subscribe(

        data => alert("Thank You!! Your Report sent Sucessfully "),
        error => console.error("Error!", error)
      )

  }
  onRating(){
    this.ratingMo = {...this.ratingMo, rating: this.ratingArray.value.toString(), solutionId: this.userId}
    this.reportService.addUserComment(this.ratingMo)
    .subscribe(

      data => alert("Thank You for your feedback!! "),
      error => console.error("Error!", error)
    )


  }

  _itemList = [
    { id: 1, name: 'ኮምፒውተር', isSelected: false },
    { id: 2, name: 'ፕሪንተር', isSelected: false },
    { id: 3, name: 'ፎቶኮፒ', isSelected: false },
    { id: 4, name: 'ፋክስ', isSelected: false },
    { id: 5, name: 'ስካነር', isSelected: false },
    { id: 6, name: 'ልላ', isSelected: false },

  ]
  _systemList = [
    { id: 1, name: 'ኔትወርክ', isSelected: false },
    { id: 2, name: 'ሜይል ኤክስቼንጅ', isSelected: false },
    { id: 3, name: 'PlS', isSelected: false },
    { id: 4, name: 'ልላ', isSelected: false }
  ]
  _rating = [
    { id: 1, name: 'በጣም ከፍተኛ', isSelected: false },
    { id: 2, name: 'ከፍተኛ', isSelected: false },
    { id: 3, name: 'መካከለኛ', isSelected: false },
    { id: 4, name: 'ዝቅተኛ', isSelected: false }
  ]
  _disability = [
    { id: 1, name: 'አዎ', isSelected: false },
    { id: 2, name: 'አይደሉም', isSelected: false },
   
  ]
  onChangeSystem(e: any) {
    const systemArray: FormArray = this.form.get('systemArray') as FormArray;
    if (e.target.checked) {
      systemArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      systemArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          systemArray.removeAt(i);
          return;
        }
        i++;
      });
    }

  }

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


  onUserRating(e: any) {
    const ratingArray: FormArray = this.form.get('ratingArray') as FormArray;
    if (e.target.checked) {
     ratingArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
     ratingArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
         ratingArray.removeAt(i);
          return;
        }
        i++;
      });
    }


  }
 
  disabilitySubmission(e: any) {
    const disabilityArray: FormArray = this.form.get('disabilityArray') as FormArray;
    if (e.target.checked) {
      disabilityArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      disabilityArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          disabilityArray.removeAt(i);
          return;
        }
        i++;
      });
    }

  }



  
}

