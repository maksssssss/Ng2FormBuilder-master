import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Control} from "../../core/models/control";

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {
  form: Control[] = [];

  createController(event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const data = JSON.parse(JSON.stringify(event.previousContainer.data))
      transferArrayItem(
        data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
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
}
