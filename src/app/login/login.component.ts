import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    
  loginInfo = new Login("","");
  selectionValue: string = "";
  password: string = "";
  email: string = "";
 
  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder) {
    // this.fg = fb.group({
    //   username: ['', [Validators.required, Validators.minLength(2), WhiteSpaceValidator.noWhiteSpace]]
    // })
   }
  getInfotest = this.loginService.getInfoTest();
  ngOnInit(): void {
    //this.router.getCurrentNavigation().extras.state
  }
  
  login(){
   
    this.loginService.login(this.loginInfo)
    .subscribe(
    
      data => {
        
        let role = data.username.role;
        if(role === 'admin'){
          history.pushState({data: data}, '', '');
          this.router.navigate(['/moj/admin/adm',{ state: data}]);
          
        } else if (role === 'user'){
          history.pushState({ data: data }, '', '');
          console.log(data)
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('UserId', data.username.UserId);
          localStorage.setItem('username', data.username.username)
          this.router.navigateByUrl('/moj/user',{state:data});
        }else if (role === 'tech'){
          history.pushState({data: data}, '', '');
          localStorage.setItem('firstName', data.username.firstName);
          localStorage.setItem('lastName', data.username.lastName);
          localStorage.setItem('username', data.username.username)
          this.router.navigateByUrl('/moj/tch/tech',{state:data})
        }
         else{
           
          alert("Incorrect Username / or Password!");
          console.warn("incorrect One");
        }
        error: (e : any) => {
          console.warn("Incorrect Two");
          alert(e);
        };
        
      
      },
     
    err=>{
     console.warn(err.error);
     alert(err.error);
    }
    )


    // .subscribe({
    //   next:(value)=> {
    //     alert("login success")
    //     localStorage.setItem('token', value.access_token)
    //     var username = value.currentuser.username
    //     localStorage.setItem('username',username)
       

    //     let role = this.loginInfo.role;
    //         if(role == 'admin'){
    //           //history.pushState({value: value}, '', '');
    //           this.router.navigateByUrl('/admin');
    //         } else if (role == 'user'){
    //           //history.pushState({data: value}, '', '');
    //           this.router.navigateByUrl('/user')
    //         }else if (role == 'tech'){
    //          // history.pushState({data: value}, '', '');
    //           this.router.navigateByUrl('/tech')
    //         } else{
    //           alert("Incorrect Username / or Password!");
    //         }





      // },
      // error:(e)=>{
      //   console.log(e);

      //   alert(e.error)
      // }


  // })


  }

}
