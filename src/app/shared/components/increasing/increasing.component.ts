import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent {

  @Input() progress: number = 20;

  @Output() outputValue: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ChangeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.progress = 0;
    }
    this.progress = this.progress + value
    this.outputValue.emit(this.progress);
  }


}
