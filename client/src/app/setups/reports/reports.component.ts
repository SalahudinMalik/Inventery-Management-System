import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SetupService} from '../setup.service';
import { Customer } from '../../models/customer.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  data:Customer[] = [];
  constructor(
    private setupService:SetupService,
    private router: Router,
    private datePipe: DatePipe 
  ) { }
  settings = {
    columns: {
      cName: {
        title: 'Name'
      },
      balance: {
        title: 'Balance'
      },
      dateOfBirth: {
        title: 'Date Of Birth',
        valuePrepareFunction: (date) => { 
          let raw = new Date(date);
  
          let formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted; 
        }
      },
      cType: {
        title: 'Type',
        valuePrepareFunction: (value) => { return value === true ? 'Active' : 'Inactive' }
      }
    }
  };
  ngOnInit() {
    this.setupService.getAllCustomer()
      .subscribe(data1 =>{
        this.data = data1;
      })
    // console.log('report nev : '+this.dataService.isNav('105'));
    // if(!this.dataService.isNav('105')){
    //   this.router.navigateByUrl("/pages/404");
    // }

    
    // let menuList:any[]=[];
    // let isnav:boolean = false;
    // this.dataService.getUserMenu(localStorage.getItem('token'))
    //   .subscribe(data =>{
    //     menuList = data;
    //     console.log('menuList : '+menuList);
    //     menuList.forEach(element => {
    //       console.log('nav service menu : '+ element.menuId);
    //       if(element.menuId == '105'){
    //         console.log('nav service menu id : '+ element.menuId);
    //         isnav = true;
          
    //       }
    //     }
    //   );
    //   if(!isnav){
    //     //console.log('nav res : '+this.dataService.isNav('105'));
    //      this.router.navigateByUrl("/pages/404");
    //   }
    // });
   
  }

}
