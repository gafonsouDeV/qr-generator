import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'qr',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr-component.component.html',
  styleUrl: './qr-component.component.css'
})
export class QrComponentComponent {
  @Input() public url: string = ''; 
  public qrCodeDownloadLink: SafeUrl = "";

  onChangeUrl(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
