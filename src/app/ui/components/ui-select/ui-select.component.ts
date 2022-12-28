import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import {
  LabelTemplateDirective,
  NotFoundTemplateDirective,
  OptionTemplateDirective,
} from '../../directives/template.directives';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface IUiSelect {
  label: string;
  value: any;
}

@Component({
  selector: 'ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiSelectComponent),
      multi: true,
    },
  ],
})
export class UiSelectComponent implements ControlValueAccessor {
  @Input() items: any[] = [];
  @Input() placeholder: string = '';
  @Input() label!: string;
  @Input() valueKey!: string;
  @Input() labelKey!: string;
  @Input() disable: boolean = false;
  @Output() changed = new EventEmitter<any>();

  @ContentChild(OptionTemplateDirective, { read: TemplateRef })
  optionTemplate!: TemplateRef<any>;
  @ContentChild(LabelTemplateDirective, { read: TemplateRef })
  labelTemplate!: TemplateRef<any>;
  @ContentChild(NotFoundTemplateDirective, { read: TemplateRef })
  notFoundTemplate!: TemplateRef<any>;

  selected!: IUiSelect | any;
  isOpen: boolean = false;

  constructor(private _cdr: ChangeDetectorRef) {}

  onChange: any = () => {};
  onTouched: any = () => {};

  onSelect(item: IUiSelect): void {
    this.selected = item;
    const value = this.valueKey
    // @ts-ignore
      ? this.selected[this.valueKey]
      : this.selected.value;
    this.onChange(value);
    this.changed.emit(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value instanceof Object) {
      this.selected = value;
    } else {
      this.selected = this.items.find((item) =>
        this.valueKey ? item[this.valueKey] === value : item.value === value
      );
    }
    this._cdr.markForCheck();
  }

  setDisabledState(isDisabled: boolean) {
    this.disable = isDisabled;
  }

  toggleDropdown(): void {
    if (!this.disable) {
      this.isOpen = !this.isOpen;
    }
  }
}
