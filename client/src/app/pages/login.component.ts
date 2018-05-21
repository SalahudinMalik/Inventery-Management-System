
import { Component , OnInit ,Provider} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgProgress } from 'ngx-progressbar';
import {AuthService} from '../auth.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit{
   userName = '';
   userPass = '';
   oldUserName = '';
   host = 'NA';
   hits = 0;
  public res ;
  public errorMsg ='';
  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ngProgress : NgProgress,
    private dataService:DataService
  ) { }
  ngOnInit(){
   
  }
  
  onClick()
  {
    if(this.userName == ''){
      this.toastr.warning('Empty Field ', 'Please enter User Name');
      return;
    }
    if(this.userPass == ''){
      this.toastr.warning('Empty Field ', 'Please enter Password');
      return;
    }
    if(this.oldUserName != this.userName){
      this.hits = 0;

    }
     let navStr:string = '';
    this.ngProgress.start();
    // this.router.navigateByUrl("/dashboard");
    // this.authService.setToken("malik"); 
      this.authService.getLogin(this.userName , this.userPass)
        .subscribe(data => {
          this.res = data;
          console.log(this.res);
          //console.log("Sub : " +data);
          
         // if(data == '1'){
         // if(!this.res.includes("Error")) {
         if(this.res[0].password == this.userPass) {
            console.log("Success :" + this.res)
            this.authService.setToken(this.userName); 
            this.ngProgress.done();
           
            this.dataService.getUserMenu(localStorage.getItem('token'))
              .subscribe(userMenu =>{
                userMenu.forEach(element => {
                 
                  if(navStr == ''){
                    navStr = this.nav(element.menuId);
                    this.router.navigateByUrl(navStr);
                    
                  }
                  
                 
                });
              });
              this.toastr.success('Successfully ', 'Login');
           
          }
          else {
            this.hits++;
            console.log(this.hits);
            this.oldUserName = this.userName;
            this.ngProgress.done();
            this.toastr.warning(this.res , 'ERROR');
          }
        },
        error =>{
          this.errorMsg = error
          this.ngProgress.done();
          this.toastr.error("Server Error" , this.errorMsg);
        });

          

          // console.log(Response);
          // this.router.navigateByUrl("/pages/dashboard");
      
      // this._employeeService.getEmployees()
      // .subscribe(data => this.employees = data,
      //           error => this.errorMsg = error);
        //console.log("values : " + this.res)
        if(this.res == '1'){
          console.log("Success :" + this.res)

        }
        else {
          console.log("Error data :" + this.res)
        }
      
  }
  nav(menuId:any):string{
    switch(menuId){
      case '100':
       return "/dashboard";
         
      case '101':
      return"/setups/sales";
    
      case '103':
        return "/setups/purchases";
        
      case '104':
        return "/setups/invoice";
          
      case '105':
        return "/setups/report";
     
      case '106':
        return "/setups/shop";
     
      
    }
    return '';
  }
 
}
