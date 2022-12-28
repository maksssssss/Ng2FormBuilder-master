import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAutocompleteComponent } from './ui-autocomplete.component';

describe('UiAutocompleteComponent', () => {
  let component: UiAutocompleteComponent;
  let fixture: ComponentFixture<UiAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
