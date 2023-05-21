import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent {

  @Input()
  counterMin:number = 0;

  @Output() emitMin:EventEmitter<number> = new EventEmitter();

  decrement(): void {
    this.counterMin--;
    this.emitMin.emit(this.counterMin);
  }

}
