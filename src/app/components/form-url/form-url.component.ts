import { Component, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-url',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-url.component.html',
  styleUrl: './form-url.component.css'
})
export class FormUrlComponent {
  urlToQr = output<string | null>();
  urlForm = new FormGroup({
    url: new FormControl('')
  });

  onSubmit() {
    console.log('si');
    this.urlToQr.emit(this.urlForm.controls['url'].value);
  }
}
