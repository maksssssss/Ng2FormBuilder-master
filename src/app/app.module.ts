import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormControlsPanelComponent } from './form-controls-panel/form-controls-panel.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormControlsPanelComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
