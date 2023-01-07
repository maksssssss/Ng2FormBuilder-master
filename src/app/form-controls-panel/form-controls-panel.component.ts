import {Component, EventEmitter, Input} from '@angular/core';
import {Control} from "../../core/models/control";
import {FormBuilderService} from "../../core/services/formBuilder.service";
import {CONTROLS} from "../../core/services/controls";

@Component({
  selector: 'app-form-controls-panel',
  templateUrl: './form-controls-panel.component.html',
  styleUrls: ['./form-controls-panel.component.scss']
})
export class FormControlsPanelComponent {
  @Input() mode: 'edit' | 'view' = 'view';
  control: Control[] = CONTROLS;


  constructor(private formBuilderService: FormBuilderService) {}

  addNewControl(item: Control) {
    this.formBuilderService.addNewControl.next(JSON.parse(JSON.stringify(item)));
  }

}
