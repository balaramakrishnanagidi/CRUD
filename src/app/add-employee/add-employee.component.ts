import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private es : EmployeeService,private router: Router){}

  ngOnInit(): void {

  }

  onSubmit(){

    console.log(this.employee);
    this.saveEmployee();
    
    
  }

  //save employee from html
  
  saveEmployee(){
    this.es.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.navigateToEmployeeList();
    },
    error => console.log(error));
    
    

  }
  
  // after saving data it should navigate to employee list

  navigateToEmployeeList(){
    this.router.navigate(['/employees']);
  }

 

}
