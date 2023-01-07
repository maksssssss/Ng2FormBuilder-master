import {Component, HostListener, Input, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Control} from "../../core/models/control";
import {KtdGridComponent, KtdGridLayout, KtdGridLayoutItem, ktdTrackById} from "@katoid/angular-grid-layout";
import {FormBuilderService} from "../../core/services/formBuilder.service";
import {debounceTime, Subject} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ControlSettingsComponent} from "../control-settings/control-settings.component";

export interface CustomGridItem extends KtdGridLayoutItem {
  data: Control;

}

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {
  @ViewChild(KtdGridComponent, {static: true}) grid!: KtdGridComponent;
  @Input() mode: 'edit' | 'view' = 'view';
  layout: CustomGridItem[] = [];
  cols = 6;
  rowHeight = 50
  trackById = ktdTrackById;

  resizeGrid: Subject<any> = new Subject<any>();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resizeGrid.next('');
  }

  constructor(private fbs: FormBuilderService,
              public dialog: MatDialog) {
    this.fbs.addNewControl.subscribe({
      next: (control) => {
        this.addItemToLayout(control);
      }
    })


    this.resizeGrid
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.grid.resize();
      })
  }

  onLayoutUpdated(event: KtdGridLayoutItem[]) {
    console.log(event)
    event.forEach(x => {
      let index = this.layout.findIndex(l => l.id === x.id);
      if (index >= 0) {
        this.layout[index] = {...this.layout[index], ...x}
      }
    })
  }

  zoom(item: Control, type: 'out' | 'in') {
    const zoomMin = 0.5;
    if (item.zoom) {
      if (+item.zoom.toFixed(0) <= zoomMin && type === 'out') {
        return;
      }
      if (type === 'out') {
        item.zoom -= 0.1
      } else {
        item.zoom += 0.1
      }
    }

  }

  addItemToLayout(control: Control) {
    const lastItem = this.layout.at(-1);
    const nextId = Date.now();
    let x = 0;
    let y = 0;
    let h = 2.1;
    if (control.type === 'table') {
      h = 3.5;
    } else if (control.type === 'pdf') {
      h = 12;
    }
    if (lastItem) {
      console.log(lastItem)
      y = lastItem.h;
    }

    const newLayoutItem: CustomGridItem = {
      id: nextId.toString(),
      x,
      y,
      w: 6,
      h,
      data: control
    };

    // Important: Don't mutate the array, create new instance. This way notifies the Grid component that the layout has changed.
    this.layout = [...this.layout, newLayoutItem];
  }

  removeItem(id: string) {
    // Important: Don't mutate the array. Let Angular know that the layout has changed creating a new reference.
    this.layout = this.ktdArrayRemoveItem(this.layout, (item) => item.id === id);
  }

  ktdArrayRemoveItem<T>(array: T[], condition: (item: T) => boolean) {
    const arrayCopy = [...array];
    const index = array.findIndex((item) => condition(item));
    if (index > -1) {
      arrayCopy.splice(index, 1);
    }
    return arrayCopy;
  }

  openEditDialog(item: CustomGridItem) {
    this.dialog.open(ControlSettingsComponent, {
      data: JSON.parse(JSON.stringify(item.data)),
      hasBackdrop: true,
      width: '50vw'
    }).afterClosed()
      .subscribe((res: Control) => {
        if (res) {
          console.log(res);
          let index = this.layout.findIndex(x => x.id === item.id);
          if (index >= 0) {
            this.layout[index].data = res;
          }
        }
      })
  }


  onCheckBoxSelect(item: CustomGridItem) {
    item.data.value = item.data.options?.filter(x => x.value)
  }


  resizeGridItem(item: CustomGridItem) {
    item.h++;
    this.layout = [...this.layout];
  }
}
