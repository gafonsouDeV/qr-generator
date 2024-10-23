import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormUrlComponent } from './components/form-url/form-url.component';
import { QrComponentComponent } from './components/qr-component/qr-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormUrlComponent,
    QrComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'qr';
  url: string = "";

  handleSubmitUrl(url: string | null) {
    console.log(url);
    this.url = url || '';
  }
}
