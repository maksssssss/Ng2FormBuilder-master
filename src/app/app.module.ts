import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormControlsPanelComponent } from './form-controls-panel/form-controls-panel.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UiModule} from "./ui/ui.module";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { ControlSettingsComponent } from './control-settings/control-settings.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatTooltipModule} from "@angular/material/tooltip";
import {KtdGridModule} from "@katoid/angular-grid-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {PdfJsViewerModule} from "ng2-pdfjs-viewer";
import {PinchZoomModule} from "./ui/components/pinch-zoom/pinch-zoom.module";


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json?cb=' + new Date().getTime()
  );
}

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormControlsPanelComponent,
    ControlSettingsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    UiModule,
    FormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatRadioModule,
    PdfJsViewerModule,
    PinchZoomModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('lang') || 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatTooltipModule,
    KtdGridModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
