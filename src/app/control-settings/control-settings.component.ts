import {Component, Input, OnInit} from '@angular/core';
import {Control} from "../../core/models/control";
import {IUiSelect} from "../ui/components/ui-select/ui-select.component";

@Component({
  selector: 'app-control-settings',
  templateUrl: './control-settings.component.html',
  styleUrls: ['./control-settings.component.scss']
})
export class ControlSettingsComponent implements OnInit {
  @Input() control!: Control;


  ngOnInit(): void {
  }


}
