import { Component } from '@angular/core';
import { Department } from './model/department';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public name = "";

  constructor(){
  }

  public rowData =["A","B","C","D","E","F"];

  ngOnInit(){
  }

  public updateData(){
    this.name = "Updated welcome msg on button click";
    //console.log(event);
  }

}
