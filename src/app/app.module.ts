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
import {PdfViewerModule} from "ng2-pdf-viewer";
import { ControlSettingsComponent } from './control-settings/control-settings.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
    PdfViewerModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('lang') || 'ru' ,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
