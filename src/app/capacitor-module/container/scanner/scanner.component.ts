import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {

  public resultQR:string = "";

  private async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }


  public async scanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      BarcodeScanner.hideBackground();
      document.body.classList.add('qrscanner');

      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        this.resultQR = result.content;
        document.body.classList.remove('qrscanner');
      } else {
        console.log('NO DATA FOUND!');
      }

    }else{
      console.log("SIN PERMISOS");
    }
  }

  public stopScanner() {
    BarcodeScanner.stopScan();
    document.body.classList.remove('qrscanner');
  }

}
