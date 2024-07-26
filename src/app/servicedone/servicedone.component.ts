import { Component } from '@angular/core';
import { ServiceRecords } from '../Model/service-records';
import { Vehicles } from '../Model/vehicles';
@Component({
  selector: 'app-servicedone',
  templateUrl: './servicedone.component.html',
  styleUrl: './servicedone.component.css'
})
export class ServicedoneComponent {

  servicesMap: Map<string, ServiceRecords> = new Map();
  selectedservice: ServiceRecords | null = null;



   newservice: ServiceRecords = {
    serviceRecordID: "1",
    serviceDate:"12-02-2002",
   status:"no",
   ServiceRepresentativeID:"1",
   vehcileID:"2"
  };
  showDetails() {
    this.selectedservice= this.servicesMap.get("1") || null;
  }
  generateRandomModelId(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    let modelId = '';
    for (let i = 0; i < 3; i++) {
      modelId += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 7; i++) {
      modelId += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return modelId;
  }
}
