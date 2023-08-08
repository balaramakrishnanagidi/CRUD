import { Component,OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  
  employees! : Employee[];

  constructor(private es: EmployeeService, private router: Router){
    
  }
  
  ngOnInit(): void {
   
    this.getEmployees();
  }

  private getEmployees(){
    this.es.getEmployeesList().subscribe(data => { this.employees = data });
  }

  addMore(){
    this.router.navigate(['add-employee']);
  }

  employeedetails(id: number){
    this.router.navigate(['employeeDetails', id]);
  }


  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.es.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
  
}
