import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  standalone: false,
  templateUrl: './stringinterpolation.component.html',
  styleUrl: './stringinterpolation.component.css'
})
export class StringinterpolationComponent {
  id: number ;
  name: string = "";
  address: string = "";
  email: string = "";
  phno: number ;
  gender: string = "";

  constructor() {
    this.id = 1;
    this.name = "Raj Yadav Ankita";
    this.email = "Raj@gmail.com";
    this.address = "Surat";
    this.phno = 9876541230;
    this.gender = "male";
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getEmail(): string {
    return this.email;
  }
  getAddress(): string {
    return this.address;
  }
  getPhno(): number {
    return this.phno;
  }
  getGender(): string {
    return this.gender;
  }
}
