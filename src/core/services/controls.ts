import {Control} from "../models/control";

export const CONTROLS: Control[] = [
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
        key: 'opt-1',
        value: false,
      },
      {
        label: 'option-2',
        key: 'opt-2',
        value: false
      },
      {
        label: 'option-3',
        key: 'opt-3',
        value: false
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
        key: 'opt-1',
        value: false
      },
      {
        label: 'option-2',
        key: 'opt-2',
        value: false
      },
      {
        label: 'option-3',
        key: 'opt-3',
        value: false
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
    value: {
      columns: [
        {
          colName: 'Column Name 1',
          isOpen: false,
        },
        {
          colName: 'Column Name 2',
          isOpen: false,
        },
        {
          colName: 'Column Name 3',
          isOpen: false,
        },
        {
          colName: 'Column Name 4',
          isOpen: false,
        },
        {
          colName: 'Column Name 5',
          isOpen: false,
        }
      ],
      rows: [[{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]]
    }
  }
]
