import { Component, OnInit } from '@angular/core';
import { responsiveService} from './services/responsive.service';
@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private responsiveService: responsiveService){
  }

  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected')
      }
      else{
        console.log('Desktop detected')
      }
    });
    this.onResize();    
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
