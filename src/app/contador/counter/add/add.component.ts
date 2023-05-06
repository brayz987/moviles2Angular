import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {


  @Input()
  counterAdd:number = 0;

  @Output() emitAdd:EventEmitter<number> = new EventEmitter();

  increment(): void {
    this.counterAdd++;
    this.emitAdd.emit(this.counterAdd);
  }

}
