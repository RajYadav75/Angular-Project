import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-visiting-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './visiting-card.component.html',
  styleUrl: './visiting-card.component.css'
})
export class VisitingCardComponent {
  customers:any[]=[];

  constructor() {
    this.customers=[
      {
        custName:'Raj Yadav',
        title:'Software Engineer',
        salary:'10000',
        department:'1',
        address:[
          'Kanapar',
          'Gorakhpur',
          'Uttar Pradesh'
        ],
        phone:[
          '7895642310',
          '9876543210'
        ]
      },
      {
        custName:'Baba Yaga',
        title:'HardCore Gamer',
        salary:'2000',
        department:'3',
        address:[
          'Heart',
          'Bansgaon',
          'Uttar Pradesh'
        ],
        phone:[
          '7895642310',
          '9876543210'
        ]
      },
      {
        custName:'Ankita ',
        title:"I don't know",
        salary:'5000',
        department:'2',
        address:[
          'Hari',
          'Gorakhpur',
          'Uttar Pradesh'
        ],
        phone:[
          '7895642310',
          '9876543210'
        ]
      }
    ];
  }
}
