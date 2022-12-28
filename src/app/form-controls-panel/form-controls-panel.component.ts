import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Control} from "../../core/models/control";

@Component({
  selector: 'app-form-controls-panel',
  templateUrl: './form-controls-panel.component.html',
  styleUrls: ['./form-controls-panel.component.scss']
})
export class FormControlsPanelComponent {
  control: Control[] = [
    {
      label: 'Number',
      type: 'number',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Text',
      type: 'text',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Email',
      type: 'email',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Password',
      type: 'password',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Date',
      type: 'date',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Time',
      type: 'time',
      class: 'my-class',
      value: '',
    },
    {
      label: 'Checkbox',
      type: 'checkbox-group',
      class: 'my-class',
      value: '',
      options: [
        {
          label: 'option-1',
          value: 'option-1',
          selected: false
        },
        {
          label: 'option-2',
          value: 'option-2',
          selected: false
        },
        {
          label: 'option-3',
          value: 'option-3',
          selected: false
        }
      ]
    },
    {
      label: 'Radio',
      type: 'radio-group',
      class: 'my-class',
      value: '',
      options: [
        {
          label: 'option-1',
          value: 'option-1',
          selected: false
        },
        {
          label: 'option-2',
          value: 'option-2',
          selected: false
        },
        {
          label: 'option-3',
          value: 'option-3',
          selected: false
        }
      ]
    },
    {
      label: 'PDF',
      type: 'pdf',
      class: 'my-class',
      src: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      zoom: 1
    },
    {
      label: 'Table',
      type: 'table',
      class: 'my-class',
      value: {}
    }
  ];

}
