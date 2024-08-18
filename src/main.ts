import 'zone.js';
import { createApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { elementDefinitions } from './element-definitions';
import { Type } from '@angular/core';

// Find all defintions that are present in the current DOM.
const activeDefinitions: { selector: string; component: Type<any> }[] = [];
for (const elementDefinition of elementDefinitions) {
  if (document.querySelector(elementDefinition.selector) !== null) {
    activeDefinitions.push(elementDefinition);
  }
}

// Bootstrap all definitions that are present in the current DOM.
createApplication(appConfig).then((applicationRef) => {
  for (const activeDefinition of activeDefinitions) {
    const elementConstruction = createCustomElement(activeDefinition.component, {
      injector: applicationRef.injector,
    });

    customElements.define(activeDefinition.selector, elementConstruction);
  }
});
