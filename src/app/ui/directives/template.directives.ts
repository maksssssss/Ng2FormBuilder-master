import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[appOptionTmp]' })
export class OptionTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[appLabelTmp]' })
export class LabelTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[appNotFoundTmp]' })
export class NotFoundTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
