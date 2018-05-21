import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('report nev : '+this.dataService.isNav('105'));
    // if(!this.dataService.isNav('105')){
    //   this.router.navigateByUrl("/pages/404");
    // }
    let menuList:any[]=[];
    let isnav:boolean = false;
    this.dataService.getUserMenu(localStorage.getItem('token'))
      .subscribe(data =>{
        menuList = data;
        console.log('menuList : '+menuList);
        menuList.forEach(element => {
          console.log('nav service menu : '+ element.menuId);
          if(element.menuId == '105'){
            console.log('nav service menu id : '+ element.menuId);
            isnav = true;
          
          }
        }
      );
      if(!isnav){
        //console.log('nav res : '+this.dataService.isNav('105'));
         this.router.navigateByUrl("/pages/404");
      }
    });
   
  }

}
