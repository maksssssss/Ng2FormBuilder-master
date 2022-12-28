import {Component, OnInit} from '@angular/core';

export interface RowModel {
  rowId: string,
  isHeader: boolean,
  cells: {
    cellId: string,
    value: string | number
  }[]
}

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent implements OnInit {
  table = {
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
    rows: []
  };


  constructor() {
  }

  ngOnInit(): void {
  }

  // 1 === Left; 2 === Right
  addCol(index: number, pos: number): void {
    this.table.columns.splice(index + pos, 0, {colName: '', isOpen: false});
    this.table.rows.forEach((item: any) => {
      item.splice(index + pos, 0, '');
    });
  }

  deleteCol(index: number): void {
    this.table.columns.splice(index, 1);
    this.table.rows.forEach((item: any) => {
      item.splice(index, 1);
    });
  }

  addRow(): void {
    const cells: any[] = [];
    for (let i = 0; i < this.table.columns.length; i++) {
      cells.push({value: ''});
    }
    // @ts-ignore
    this.table.rows.push(cells);
  }

  deleteRow(index: number): void {
    this.table.rows.splice(index, 1);
  }


  openColMenu(col: any, event: any): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.table.columns.forEach(x => x.isOpen = false);
    col.isOpen = !col.isOpen;
  }

  log(event: any) {
    console.log(event);
  }
}
