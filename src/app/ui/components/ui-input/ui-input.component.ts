import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    },
  ],
})
export class UiInputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('formField', { static: false }) formField!: ElementRef;

  @Input()
  label!: string;

  @Input()
  placeholder = '';

  @Input()
  prefixIcon!: string;

  @Input()
  suffixIcon!: string;

  @Input()
  type: 'email' | 'password' | 'text' | 'number' | 'date' | 'time' = 'text';

  @Input()
  disabled = false;

  @Input()
  text!: string;

  inputControl: string = '';
  isClickIconUsed!: boolean;
  focused!: boolean;

  @Output() clickIcon: EventEmitter<any> = new EventEmitter();

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.isClickIconUsed = this.clickIcon.observed;
  }

  onInputChange(): void {
    this.onChange(this.inputControl);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.inputControl = value;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onClickIcon() {
    this.clickIcon.emit(this.type);
  }
}
