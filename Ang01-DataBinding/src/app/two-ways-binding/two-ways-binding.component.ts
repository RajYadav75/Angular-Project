import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-two-ways-binding',
  standalone: false,
  templateUrl: './two-ways-binding.component.html',
  styleUrl: './two-ways-binding.component.css'
})
export class TwoWaysBindingComponent {
  name: string = "Raj Yadav";
}
