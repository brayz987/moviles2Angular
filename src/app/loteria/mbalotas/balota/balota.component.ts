import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balota',
  templateUrl: './balota.component.html',
  styleUrls: ['./balota.component.scss']
})
export class BalotaComponent {

  @Input() valor: number = 0;
  

}
