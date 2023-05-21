import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() footerText:string = "Primera Practica Angular"
  @Input() colorFooter:string = "bg-light";
  @Input() customStyles:object = {};
  @Input() classText:string = "";
}
