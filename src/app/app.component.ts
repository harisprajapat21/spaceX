import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'launch-programs';
  programs:any[];
  filterYears: string[];
  constructor(private apiService: ApiService, @Inject(PLATFORM_ID) private platformId){}

  ngOnInit(){
    this.programs = [];  
    if(isPlatformBrowser(this.platformId)){
      let data = JSON.parse(window.localStorage.getItem('filterCached'));
      if(data){
        const {launch_year, launch_success, land_success} = JSON.parse(window.localStorage.getItem('filterCached')); 
        const qryParamStrng = this.encodeQueryData({launch_year, launch_success, land_success});
        this.loadData(qryParamStrng); 
      } else{
        this.loadData(null);
      }         
    }    
  }

  loadData(data){
    this.apiService.fetchDataOnLoad(data).subscribe((data: any[])=>{       
      this.programs = data;		
		}); 
  }

  handleFilterRequest(evnt: any){
    if(evnt){
      const data = JSON.parse(window.localStorage.getItem('filterCached'));
      const combinedData = {...data,...evnt};
      const {launch_year, launch_success, land_success} = combinedData;
      const qryParamStrng = this.encodeQueryData({launch_year, launch_success, land_success});
      this.loadData(qryParamStrng);     
      window.localStorage.setItem('filterCached', JSON.stringify(combinedData));
    }    
  }

  encodeQueryData(data) {
    const ret = [];
    for (let d in data){
      if(data[d] || data[d] == false)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }      
    return ret.join('&');
 }
}
