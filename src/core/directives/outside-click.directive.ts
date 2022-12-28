import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(
    targetElement: string
  ) {
    if (!this._elementRef.nativeElement.contains(targetElement))
      this.clickOutside.emit(null);
  }
}
