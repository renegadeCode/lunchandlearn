import {Directive, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[elementInitialized]'
})
export class NgInitDirective {

  @Output('init') initEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
      setTimeout(() => this.initEvent.emit(), 10);
  }
}
