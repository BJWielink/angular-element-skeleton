import { Type } from '@angular/core';
import { AppComponent } from './app/app.component';

export const elementDefinitions: { selector: string; component: Type<any> }[] = [
  { selector: 'x-root', component: AppComponent },
];
