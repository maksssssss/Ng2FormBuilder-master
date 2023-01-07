import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Control} from "../models/control";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  addNewControl: Subject<Control> = new Subject<Control>();
  constructor() { }
}
