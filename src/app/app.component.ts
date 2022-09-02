import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gdp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'good-practices';

  api = `${environment.api}/users`;
}
