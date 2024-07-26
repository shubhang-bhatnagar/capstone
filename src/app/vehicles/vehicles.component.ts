import { Component } from '@angular/core';
import { Vehicles } from '../Model/vehicles';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  vehiclesMap: Map<string, Vehicles> = new Map();
  selectedVehicle: Vehicles | null = null;

  addVehicle(form: NgForm) {
    const newVehicle: Vehicles = {
      modelId: this.generateRandomModelId(),
      customerName: form.value.customerName,
      services: form.value.services,
      expectedDate: form.value.expectedDate
    };

    this.vehiclesMap.set(newVehicle.modelId, newVehicle);
    form.resetForm();
  }

  deleteVehicle(modelId: string) {
    this.vehiclesMap.delete(modelId);
    if (this.selectedVehicle && this.selectedVehicle.modelId === modelId) {
      this.selectedVehicle = null;
    }
  }

  showDetails(modelId: string) {
    this.selectedVehicle = this.vehiclesMap.get(modelId) || null;
  }

  clearDetails() {
    this.selectedVehicle = null;
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