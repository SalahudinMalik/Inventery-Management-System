import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styles : [`
  
  `]
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  dashboard:boolean = false;
  sale:boolean = false;
  purchase:boolean = false;
  invoice:boolean = false;
  report:boolean = false;
  shop:boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  constructor (private authService:AuthService,
               private router: Router,
               private dataService: DataService
  ){}

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.dataService.getUserMenu()
      .subscribe(data =>{
        console.log(data)
        data.forEach(element => {
          console.log(element);
          switch(element.menuId){
            case '100':
              this.dashboard = true;
              break;
            
            case '101':
              this.sale = true;
              break;
            
            case '103':
              this.purchase = true;
              break;
            
            case '104':
              this.invoice = true;
              break;
            
            case '105':
              this.report = true;
              break;
            
            case '106':
              this.shop = true;
              break;
            
            
          }
        });
      })

  }

  logout(){
      this.authService.rmToken();
      this.router.navigateByUrl("/pages");
  }
}
