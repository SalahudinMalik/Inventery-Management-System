import { Component , OnInit, style} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NgProgress } from 'ngx-progressbar';
import {User} from '../models/user.model';
import {Menu} from '../models/menu.model'
import { networkInterfaces } from 'os';



@Component({
  templateUrl: 'dashboard.component.html',
  styles : []
})
export class DashboardComponent implements OnInit {

  userList: User[] = [];
  menuList: Menu [] =[];
  selectedMenu: any[]=[0,1,0,1,0,1];
  selectedUser: string = "Select User";
  selectedUserCode: any = '';
  menuToShow:any[] = [];
  constructor( 
    private dataService:DataService,
    private toastr: ToastrService,
    private ngProgress : NgProgress,
    private router: Router
   ) { }

   ngOnInit(){
   
     this.dataService.getAllUser()
        .subscribe(data => {
          this.userList = data;
      });
     this.dataService.getUserMenu()
      .subscribe(data =>{
        this.menuToShow = data;

      });
      console.log('nav res : '+this.dataService.isNav('100'));
      let menuList:any[]=[];
      let isnav:boolean = false;
      this.dataService.getUserMenu()
        .subscribe(data =>{
          menuList = data;
          console.log('menuList : '+menuList);
          menuList.forEach(element => {
            console.log('nav service menu : '+ element.menuId);
            if(element.menuId == '100'){
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


     this.dataService.getAllMenu()
        .subscribe(data =>{
          console.log(data);
          this.menuList = data;
          this.menuList.forEach(element => {
         
              this.menuToShow.forEach(element2 => {
                if(element.menuId == element2.menuId){
                  element.checked = true;
                  
                }
                
              
              });
            
          });
        });
     
   }
   saveData(){
    if(this.selectedUser == 'Select User' ){
      this.toastr.warning('Please select user first. ');
      return;
    }
    let dataToSave:any;
    //plots = this.selection.selected;
    this.menuList.forEach(element => {
      if(element.checked){
        dataToSave = JSON.stringify({'username' : this.selectedUser , 'menuId' : element.menuId});
        this.dataService.saveMenuData(dataToSave , this.selectedUser)
          .subscribe(data =>{
            this.toastr.success('Data inserted successfully.');
          },
        err =>{
          this.toastr.error(err ,'Error');
        });
        
      }
    });
    
  } 
   userChange(newuser: User) { 
    this.selectedUser = newuser.username;
    console.log(newuser);
  
  }






  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


 
}

