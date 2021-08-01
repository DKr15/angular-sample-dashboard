import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 public errMsg = "";

  constructor(private apiService: ApiService){
  }

  public employeeData : any;
  public departmentName : string = "";
  public postDataObject = new Department();

  ngOnInit() {
   
  }

  postDataMethod(){
    console.log("Input data : "+this.departmentName);
    this.postDataObject.depName = this.departmentName;
    this.apiService.postDepartmentData( this.postDataObject);
  }

  getDataMethod(){
    this.apiService.getDepartment()
    .subscribe(data => this.employeeData = data,
      error => this.errMsg = error);
  }

}
