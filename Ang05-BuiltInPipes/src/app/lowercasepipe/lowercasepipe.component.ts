import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lowercasepipe',
  imports: [
    CommonModule
  ],
  templateUrl: './lowercasepipe.component.html',
  styleUrl: './lowercasepipe.component.css'
})
export class LowercasepipeComponent {
  friends:any[] = [];
  constructor(){
    this.friends = [
      {
        id: '101',
        name: 'Pragati',
        gender: 'Female',
        title: 'Software Developer',
        salary: '100000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        id: '102',
        name: 'Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '120000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        id: '103',
        name: 'Ankita',
        gender: 'Female',
        title: 'Software Lead',
        salary: '150000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        id: '104',
        name: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '200000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },

      {
        id: '105',
        name: 'Pallavi',
        gender: 'Female',
        title: 'Software Developer',
        salary: '110000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        id: '106',
        name: 'Wo Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '130000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        id: '107',
        name: 'Priyanka',
        gender: 'Female',
        title: 'Software Lead',
        salary: '160000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        id: '108',
        name: 'Raj Asli',
        gender: 'Male',
        title: 'Software Manager',
        salary: '210000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        id: '109',
        name: 'Soumya',
        gender: 'Female',
        title: 'Software Developer',
        salary: '120000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        id: '110',
        name: 'Raj Hi Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '140000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        id: '111',
        name: 'Soumya',
        gender: 'Female',
        title: 'Software Lead',
        salary: '170000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        id: '112',
        name: 'Babu Raj',
        gender: 'Male',
        title: 'Software Manager',
        salary: '220000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        id: '113',
        name: 'Ankita Tiwari',
        gender: 'Female',
        title: 'Software Developer',
        salary: '130000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        id: '114',
        name: 'Raj Yadav RAT',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '150000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        id: '115',
        name: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        id: '116',
        name: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },
      {
        id: '117',
        name: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        id: '118',
        name: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      }
    ];
  }

}
