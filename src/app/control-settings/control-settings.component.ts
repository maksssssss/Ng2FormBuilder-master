import {Component, Inject, Input, OnInit} from '@angular/core';
import {Control} from "../../core/models/control";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-control-settings',
  templateUrl: './control-settings.component.html',
  styleUrls: ['./control-settings.component.scss']
})
export class ControlSettingsComponent implements OnInit {
  control: Control = this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Control) {
    console.log(data)
  }


  ngOnInit(): void {
  }

  removeOption(index: number) {
    if (this.control.options?.length) {
      this.control.options.splice(index, 1);
    }
  }

  addOption() {
    if (!this.control.options?.length) {
      this.control.options = [];
    }

    this.control.options.push({
      key: '',
      label: '',
      value: false
    })
  }


  changeDefaultValue(option: any) {
    if (this.control.type === 'radio-group') {
      this.control.options?.forEach(x => x.value = false);
      option.value = true;
      this.control.value = option.key;
      return;
    }

    option.value = true;


    if (this.control.type === 'checkbox-group') {
      this.control.value = this.control.options?.filter(x => x.value) ?? []
    }
  }


}
