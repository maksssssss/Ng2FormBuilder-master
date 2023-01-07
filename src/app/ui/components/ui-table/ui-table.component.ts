import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TableModel {
  columns: {
    colName: string
    isOpen: boolean
  }[],
  rows: {
    value: string
  }[][]
}

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent implements OnInit {
  @Output() onChangeTable: EventEmitter<any> = new EventEmitter<any>();

  @Input() tableData: TableModel = {
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
  };


  constructor() {
  }

  ngOnInit(): void {
  }

  // 1 === Left; 2 === Right
  addCol(index: number, pos: number): void {
    this.tableData.columns.splice(index + pos, 0, {colName: '', isOpen: false});
    this.tableData.rows.forEach((item: any) => {
      item.splice(index + pos, 0, '');
    });
    this.onChangeTable.emit();
  }

  deleteCol(index: number): void {
    this.tableData.columns.splice(index, 1);
    this.tableData.rows.forEach((item: any) => {
      item.splice(index, 1);
    });
    this.onChangeTable.emit();
  }

  addRow(): void {
    const cells: any[] = [];
    for (let i = 0; i < this.tableData.columns.length; i++) {
      cells.push({value: ''});
    }
    // @ts-ignore
    this.tableData.rows.push(cells);
    this.onChangeTable.emit();
  }

  deleteRow(index: number): void {
    this.tableData.rows.splice(index, 1);
    this.onChangeTable.emit();
  }


  openColMenu(col: any, event: any): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.tableData.columns.forEach(x => x.isOpen = false);
    col.isOpen = !col.isOpen;
  }

  log(event: any) {
    console.log(event);
  }
}
