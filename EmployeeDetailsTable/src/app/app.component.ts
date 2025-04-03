import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeDetailsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeDetailsTable';
}
