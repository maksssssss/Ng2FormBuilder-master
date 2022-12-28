import {
  Component, EventEmitter,
  Input, OnChanges, OnInit, Output, SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ui-autocomplete',
  templateUrl: './ui-autocomplete.component.html',
  styleUrls: ['./ui-autocomplete.component.scss'],
})
export class UiAutocompleteComponent implements OnInit {
  @Output() changed = new EventEmitter();

  @Input()
  placeholder = '';

  @Input()
  disabled = false;

  @Input()
  items: any[] | null = [];

  @Input()
  labelKey = '';

  @Input()
  defaultValue: any[] = [];
  tagValue: any;
  selectedItems: any[] = [];
  copyItems: any[] | null = [];

  changeMark(event: any) {
    if (!event) {
      this.copyItems = this.items;
      return;
    }
    const findItem = this.items?.find(item => item[this.labelKey] === event);
    if (findItem) {
      this.selectedItems.push(findItem);
    }
    this.changed.emit(this.selectedItems);
    // @ts-ignore
    this.copyItems = this.items?.filter(i => i[this.labelKey].toLowerCase().includes(event.toLowerCase()));
  }

  ngOnInit(): void {
    if (this.defaultValue.length) {
      this.selectedItems = this.defaultValue;
    }
    this.copyItems = this.items;
  }
}
