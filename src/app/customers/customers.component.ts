import { Component } from '@angular/core';
import { Customers } from '../Model/customers';
import { NgForm } from '@angular/forms';
import { Vehicles } from '../Model/vehicles';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customersMap: Map<string,Customers>=new Map();
  selectedCustomer:Customers | null = null;

  addCustomer(form: NgForm) {
    const newCustomer: Customers = {
      id: this.generateRandomid(),
      name: form.value.customerName,
      surname: form.value.surname,
      number: form.value.number
    };

    this.customersMap.set(newCustomer.id, newCustomer);
    form.resetForm();
  }

  deletecustomer(id: string) {
    this.customersMap.delete(id);
    if (this.selectedCustomer && this.selectedCustomer.id === id) {
      this.selectedCustomer = null;
    }
  }

  showDetails(id: string) {
    this.selectedCustomer = this.customersMap.get(id) || null;
  }

  clearDetails() {
    this.selectedCustomer = null;
  }

  generateRandomid(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    let id = '';
    for (let i = 0; i < 3; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 7; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return id;
}
}