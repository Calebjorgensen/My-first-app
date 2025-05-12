import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  standalone: false,
  templateUrl: './warning-alert.component.html',
  // styleUrl: './warning-alert.component.css'
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
    `]
})
export class WarningAlertComponent {

}
