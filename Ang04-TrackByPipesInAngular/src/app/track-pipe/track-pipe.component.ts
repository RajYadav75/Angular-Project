import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-track-pipe',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './track-pipe.component.html',
  styleUrl: './track-pipe.component.css'
})
export class TrackPipeComponent {
  Employee:any[] = [];
  constructor() {
    this.Employee = [
      {
        empid: '101',
        empname: 'Pragati',
        gender: 'Female',
        title: 'Software Developer',
        salary: '100000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '102',
        empname: 'Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '120000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '103',
        empname: 'Ankita',
        gender: 'Female',
        title: 'Software Lead',
        salary: '150000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '104',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '200000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },

      {
        empid: '105',
        empname: 'Pallavi',
        gender: 'Female',
        title: 'Software Developer',
        salary: '110000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '106',
        empname: 'Wo Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '130000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '107',
        empname: 'Priyanka',
        gender: 'Female',
        title: 'Software Lead',
        salary: '160000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '108',
        empname: 'Raj Asli',
        gender: 'Male',
        title: 'Software Manager',
        salary: '210000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        empid: '109',
        empname: 'Soumya',
        gender: 'Female',
        title: 'Software Developer',
        salary: '120000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '110',
        empname: 'Raj Hi Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '140000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '111',
        empname: 'Soumya',
        gender: 'Female',
        title: 'Software Lead',
        salary: '170000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '112',
        empname: 'Babu Raj',
        gender: 'Male',
        title: 'Software Manager',
        salary: '220000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        empid: '113',
        empname: 'Ankita Tiwari',
        gender: 'Female',
        title: 'Software Developer',
        salary: '130000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '114',
        empname: 'Raj Yadav RAT',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '150000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '115',
        empname: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '116',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },
      {
        empid: '115',
        empname: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '116',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      }
    ];
  }
  getLatestData(){
    this.Employee = [
      {
        empid: '101',
        empname: 'Pragati',
        gender: 'Female',
        title: 'Software Developer',
        salary: '100000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '102',
        empname: 'Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '120000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '103',
        empname: 'Ankita',
        gender: 'Female',
        title: 'Software Lead',
        salary: '150000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '104',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '200000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },

      {
        empid: '105',
        empname: 'Pallavi',
        gender: 'Female',
        title: 'Software Developer',
        salary: '110000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '106',
        empname: 'Wo Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '130000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '107',
        empname: 'Priyanka',
        gender: 'Female',
        title: 'Software Lead',
        salary: '160000',
        department:3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '108',
        empname: 'Raj Asli',
        gender: 'Male',
        title: 'Software Manager',
        salary: '210000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        empid: '109',
        empname: 'Soumya',
        gender: 'Female',
        title: 'Software Developer',
        salary: '120000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '110',
        empname: 'Raj Hi Raj',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '140000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '111',
        empname: 'Soumya',
        gender: 'Female',
        title: 'Software Lead',
        salary: '170000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '112',
        empname: 'Babu Raj',
        gender: 'Male',
        title: 'Software Manager',
        salary: '220000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },


      {
        empid: '113',
        empname: 'Ankita Tiwari',
        gender: 'Female',
        title: 'Software Developer',
        salary: '130000',
        department: 1,
        address: 'Hyderabad',
        dob: '01/01/1990'
      },
      {
        empid: '114',
        empname: 'Raj Yadav RAT',
        gender: 'Male',
        title: 'Sr Software Developer',
        salary: '150000',
        department: 2,
        address: 'Chennai',
        dob: '02/02/1991'
      },
      {
        empid: '115',
        empname: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '116',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },
      {
        empid: '115',
        empname: 'Kanishq',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '116',
        empname: 'Raj Yadav',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      },
      {
        empid: '117',
        empname: 'Prinyanka',
        gender: 'Female',
        title: 'Software Lead',
        salary: '180000',
        department: 3,
        address: 'Banglore',
        dob: '03/03/1989'
      },
      {
        empid: '118',
        empname: 'Baba Yaga',
        gender: 'Male',
        title: 'Software Manager',
        salary: '230000',
        department: 4,
        address: 'Delhi',
        dob: '04/04/1980'
      }
    ];
  }

  trackByEmpCode(index:number,employee:any):string {
    return employee.code;
  }
}
