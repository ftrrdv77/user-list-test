import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Статус - ';
  typesOfShoes: string[] = ['smith', 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}

