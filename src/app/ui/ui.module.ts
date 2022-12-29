import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiInputComponent} from './components/ui-input/ui-input.component';
import {FormsModule} from '@angular/forms';
import {OutsideClickDirective} from '../../core/directives/outside-click.directive';
import {
  LabelTemplateDirective,
  NotFoundTemplateDirective,
  OptionTemplateDirective,
} from './directives/template.directives';
import {OverlayModule} from '@angular/cdk/overlay';
import {TranslateModule} from '@ngx-translate/core';
import {UiAutocompleteComponent} from './components/ui-autocomplete/ui-autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {UiTableComponent} from './components/ui-table/ui-table.component';
import {MatIconModule} from "@angular/material/icon";
import {UiSelectComponent} from "./components/ui-select/ui-select.component";
import {MatTooltipModule} from "@angular/material/tooltip";

const COMPONENTS = [
  UiInputComponent,
  UiAutocompleteComponent,
  UiTableComponent,
  UiSelectComponent
];

const DIRECTIVES = [
  OutsideClickDirective,
  LabelTemplateDirective,
  OptionTemplateDirective,
  NotFoundTemplateDirective,
];

const MODULES = [
  FormsModule,
  CommonModule,
  OverlayModule,
  TranslateModule,
  MatIconModule,
  MatAutocompleteModule,
];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [...MODULES, MatTooltipModule],
    exports: [...COMPONENTS, ...DIRECTIVES],
})
export class UiModule {
}
