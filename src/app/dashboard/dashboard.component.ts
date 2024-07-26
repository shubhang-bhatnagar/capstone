import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isvehicleComponentVisible = false;
  iscustomercomponentvisible=false;
  toggleComponentvehicle() {
    this.isvehicleComponentVisible = !this.isvehicleComponentVisible;
}
isserviceComponentVisible = false;
toggleComponentservice() {
  this.isserviceComponentVisible = !this.isserviceComponentVisible;
}
toggleComponentcustomer() {
  this.iscustomercomponentvisible = !this.iscustomercomponentvisible;
}
}