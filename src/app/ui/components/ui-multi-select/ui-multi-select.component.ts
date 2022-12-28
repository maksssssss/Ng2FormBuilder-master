import {
  ChangeDetectionStrategy,
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
  id?: string;
  label: string;
  value: string;
}

@Component({
  selector: 'ui-multi-select',
  templateUrl: './ui-multi-select.component.html',
  styleUrls: ['./ui-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiMultiSelectComponent),
      multi: true,
    },
  ],
})
export class UiMultiSelectComponent implements ControlValueAccessor {
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

  selectedItems: IUiSelect[] = [];
  isOpen: boolean = false;

  constructor() {}

  onChange: any = () => {};
  onTouched: any = () => {};

  onSelect(item: IUiSelect): void {
    const find = this.selectedItems.find((i) => i?.id === item?.id);
    if (!find) {
      this.selectedItems.push(item);
      this.onChange(this.selectedItems);
      this.changed.emit(this.selectedItems);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (!value) {
      return;
    }
    if (Array.isArray(value) && value.filter((i) => i).length) {
      this.selectedItems = value;
    } else {
      this.selectedItems.push(value);
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disable = isDisabled;
  }

  toggleDropdown(): void {
    if (!this.disable) {
      this.isOpen = !this.isOpen;
    }
  }

  removeItem(event: any, idx: number): void {
    this.selectedItems.splice(idx, 1);
    this.onChange(this.selectedItems);
    this.changed.emit(this.selectedItems);
  }
}
